import React, { useState } from 'react';
import { useWompiPayment } from '../hooks/useWompiPayment';
import { User, Mail, Phone, Lock, CreditCard, Building, BookUser } from 'lucide-react';


interface PaymentFormProps {
  product: {
    type: string;
    name: string;
    priceInCents: number;
    selected_course: string;
  };
}

const PaymentForm: React.FC<PaymentFormProps> = ({ product }) => {
  const { initializePayment, isLoading, error, isReady } = useWompiPayment();
  const [formData, setFormData] = useState({ name: '', lastname: '', email: '', phone: '', document: '' });
  
  const isFormValid = formData.name.trim() !== '' && formData.lastname.trim() !== '' && formData.email.trim() !== '';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentRequest = () => {
    if (!isFormValid) return;
    const paymentData = {
      amountInCents: product.priceInCents,
      userData: {
        product_type: product.type,
        product_name: product.name,
        selected_course: product.selected_course, 
        ...formData,
      },
    };
    initializePayment(paymentData);
  };
  
 
  const ProductIcon = product.type === 'MAESTRIA' ? BookUser : Building;

  
  return (
    <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-2xl max-w-2xl mx-auto border border-gray-100">
      
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center bg-blue-100 text-blue-600 rounded-full p-3 mb-4">
          <CreditCard className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Finalizar Inscripción</h2>
        <p className="text-gray-500 mt-2">Estás a un paso de asegurar tu lugar.</p>
      </div>

      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 flex items-center space-x-4">
        <div className="bg-gray-200 text-gray-600 rounded-lg p-3">
          <ProductIcon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-gray-800">{product.name}</h3>
          <p className="text-2xl font-bold text-blue-600">
            {(product.priceInCents / 100).toLocaleString('es-CO', {style: 'currency', currency: 'COP'})}
          </p>
        </div>
      </div>
      
      
      <div className="space-y-6">
        <h4 className="text-lg font-semibold text-gray-700 border-b pb-2">Información del Contacto Principal</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} placeholder="Nombre" required className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
          </div>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" name="lastname" id="lastname" value={formData.lastname} onChange={handleInputChange} placeholder="Apellido" required className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
          </div>
        </div>
        <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} placeholder="Email Corporativo" required className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
        </div>
        <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleInputChange} placeholder="Teléfono de Contacto" className="pl-10 w-full p-3 border border-gray-300 rounded-md"/>
        </div>
        <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" name="document" id="document" value={formData.document} onChange={handleInputChange} placeholder="Documento / NIT" className="pl-10 w-full p-3 border border-gray-300 rounded-md"/>
        </div>
      </div>

      
      <div className="mt-8">
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <button 
          onClick={handlePaymentRequest}
          disabled={isLoading || !isReady || !isFormValid}
          className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Procesando..." : (isReady ? `Pagar y Finalizar Inscripción` : "Cargando Módulo de Pago...")}
        </button>
        <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
            <Lock className="w-4 h-4 mr-2"/>
            <span>Transacción segura procesada por Wompi</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;