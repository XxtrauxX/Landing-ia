import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, CheckCircle, Download, Monitor, Video } from 'lucide-react';

const CursosModulares = () => {
  const modalidades = [
    { icon: Monitor, name: 'Presencial' },
    { icon: Video, name: 'Virtual' }
  ];

  const whatsappNumber = "573012463004";
  const messageIntensiva = "Hola, quisiera más información sobre la Masterclass Intensiva.";
  const messageAvanzada = "Hola, quisiera más información sobre la Masterclass Avanzada.";

  return (
    
    <section 
      id="cursos" 
      className="relative py-20"
    >
     
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'linear-gradient(to right top, #e0f7fa, #e8f5de, #f8f0d2, #fde9d8, #fde6e1)',
          maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
        }}
      ></div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Capacitación Ejecutiva Rápida y Aplicable
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ideal para equipos directivos, áreas funcionales o validación de adopción IA
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-8 bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-sm">
            <span className="text-gray-700 font-medium">Modalidades:</span>
            {modalidades.map((modalidad, index) => (
              <div key={index} className="flex items-center space-x-2">
                <modalidad.icon className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-gray-700">{modalidad.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Masterclass Intensiva */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-200/50 hover:-translate-y-2">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-lg p-3">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Masterclass Intensiva</h3>
                  <p className="text-blue-600 font-semibold">4 Horas - Formato Ejecutivo</p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-6">IA + Dominio de 1 Herramienta Ejecutiva</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="text-gray-700">Fundamentos estratégicos</span></div>
              <div className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="text-gray-700">Dominio práctico de herramienta</span></div>
              <div className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="text-gray-700">Casos reales y ejercicios aplicados</span></div>
            </div>
            <div className="bg-gray-50/80 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-2 mb-2"><CheckCircle className="w-5 h-5 text-blue-600" /><span className="font-semibold text-gray-900">Incluye:</span></div>
              <p className="text-gray-700">Manual ejecutivo + Plantillas personalizadas</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">Desde $890</div>
              <div className="text-sm text-gray-500 mb-4">USD por participante</div>
              
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageIntensiva)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Más Información
              </a>
            </div>
          </div>
          
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-cyan-200 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-300/60 hover:-translate-y-2 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">Más Popular</span>
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg p-3">
                  <Clock className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Masterclass Avanzada</h3>
                  <p className="text-cyan-600 font-semibold">8 Horas - Inmersión Completa</p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-6">Inmersión Estratégica Personalizada</p>
            <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="text-gray-700">Profundización en herramienta avanzada</span></div>
                <div className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="text-gray-700">Diagnóstico + Plan de implementación</span></div>
                <div className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="text-gray-700">Plantillas, ejercicios y KPIs por industria</span></div>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-4 mb-6 border border-cyan-200">
                <div className="flex items-center space-x-2 mb-2"><CheckCircle className="w-5 h-5 text-cyan-600" /><span className="font-semibold text-gray-900">Incluye:</span></div>
                <p className="text-gray-700">M. ejecutivo + Plantillas personalizadas + Seguimiento 30 días</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">Desde $1,590</div>
              <div className="text-sm text-gray-500 mb-4">USD por participante</div>
              
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageAvanzada)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Más Información
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center space-x-2 mx-auto group">
            <Download className="w-5 h-5" />
            <span>Descargar Portafolio de Cursos</span>
          </button>
          <p className="text-gray-500 mt-2">
            Información detallada, temarios y opciones de personalización
          </p>
        </div>
      </div>
    </section>
  );
};

export default CursosModulares;