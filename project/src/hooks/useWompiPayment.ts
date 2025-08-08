// src/hooks/useWompiPayment.ts
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;

declare global {
  interface Window {
    WidgetCheckout: new (config: any) => { open: (callback: (result: any) => void) => void };
  }
}

export const useWompiPayment = () => {
  const [wompiPublicKey, setWompiPublicKey] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    
    const fetchConfig = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}config`);
        setWompiPublicKey(response.data.data.wompiPublicKey);
      } catch (err) {
        setError("No se pudo cargar la configuración de pago.");
      }
    };
    fetchConfig();

    
    const script = document.createElement('script');
    script.src = 'https://checkout.wompi.co/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const initializePayment = async (paymentData: any) => {
    if (!wompiPublicKey) {
      setError("La configuración de pago no está lista.");
      return;
    }
    setIsLoading(true);
    setError(null);

    try {
      const reference = `pay_${Date.now().toString(36)}_${Math.random().toString(36).substring(2, 8)}`;

      const payload = { ...paymentData.userData, payment_reference: reference };

      
      await axios.post(`${API_BASE_URL}inscriptions/register`, payload);

      
      const signatureResponse = await axios.post(`${API_BASE_URL}wompi/generate-signature`, {
        reference,
        amountInCents: paymentData.amountInCents,
        currency: 'COP',
      });
      const signature = signatureResponse.data.signature;

      
      const checkout = new window.WidgetCheckout({
        currency: 'COP',
        amountInCents: paymentData.amountInCents,
        reference,
        publicKey: wompiPublicKey,
        redirectUrl: `${window.location.origin}/pago-exitoso`, 
        'signature:integrity': signature,
      });

      checkout.open((result: any) => {
        setIsLoading(false);
        if (result.transaction && result.transaction.status === 'APPROVED') {
          window.location.href = '/pago-exitoso';
        }
      });

    } catch (err) {
      setError("Ocurrió un error al iniciar el pago.");
      setIsLoading(false);
    }
  };

  return { initializePayment, isLoading, error, isReady: !!wompiPublicKey };
};