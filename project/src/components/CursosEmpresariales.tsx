import React, { useState } from 'react';
import { useWompiPayment } from '../hooks/useWompiPayment';


const cursos = [
  {
    id: 'intensiva',
    title: 'Masterclass Intensiva',
    description: 'Un programa de inmersión total para equipos que buscan resultados rápidos y aplicables.',
    price: 1500000, // 1,500,000 COP
    product_name: 'Masterclass Intensiva'
  },
  {
    id: 'avanzada',
    title: 'Masterclass Avanzada',
    description: 'Profundiza en temas complejos de IA y desarrolla capacidades estratégicas a largo plazo.',
    price: 2500000, // 2,500,000 COP
    product_name: 'Masterclass Avanzada'
  }
];

const CursosEmpresariales: React.FC = () => {
 
  const { initializePayment, isLoading, error, isReady } = useWompiPayment();
  
  
  const [processingCourse, setProcessingCourse] = useState<string | null>(null);

  const handlePaymentRequest = (curso: typeof cursos[0]) => {
    setProcessingCourse(curso.id);

    
    const paymentData = {
      amountInCents: curso.price * 100, 
      userData: {
        product_type: 'CURSO_EMPRESARIAL',
        product_name: curso.product_name,
       
        name: 'Contacto Empresa',
        lastname: 'Ejemplo Corp',
        email: 'contacto@empresa.com',
        phone: '3001234567',
        document: '900123456-7'
      }
    };

    
    initializePayment(paymentData);
  };

  return (
    <section id="cursos-empresariales" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Cursos Empresariales</h2>
        <p className="mb-12 text-gray-600 max-w-3xl mx-auto">Potencia a tus equipos con formación de vanguardia en Inteligencia Artificial, diseñada para el impacto empresarial.</p>
        
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {cursos.map((curso) => (
            <div key={curso.id} className="bg-gray-50 p-8 rounded-lg shadow-md flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{curso.title}</h3>
              <p className="text-gray-600 mb-6">{curso.description}</p>
              <p className="text-3xl font-bold text-blue-600 mb-6">${curso.price.toLocaleString('es-CO')} COP</p>
              
              <button 
                onClick={() => handlePaymentRequest(curso)}
                disabled={isLoading || !isReady}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all disabled:opacity-50"
              >
                {isLoading && processingCourse === curso.id ? "Procesando..." : "Más Información y Pago"}
              </button>
            </div>
          ))}
        </div>
        
        {error && <p className="text-red-500 text-center mt-6">{error}</p>}
      </div>
    </section>
  );
};

export default CursosEmpresariales;