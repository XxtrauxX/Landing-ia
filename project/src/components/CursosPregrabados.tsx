import React from 'react';
import { Play, Users, Clock, CheckCircle, MessageSquare, Download, Video, BookOpen } from 'lucide-react';

const CursosPregrabados = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Módulo Base Incluido',
      desc: '"El Despertar Digital" - Fundamentos estratégicos'
    },
    {
      icon: Video,
      title: 'Clases por Herramienta',
      desc: 'Videos pregrabados con ejercicios prácticos'
    },
    {
      icon: Download,
      title: 'Material Descargable',
      desc: 'Plantillas, guías y evaluaciones automáticas'
    },
    {
      icon: MessageSquare,
      title: 'Sesiones en Vivo',
      desc: '1-2 sesiones semanales con instructor experto'
    },
    {
      icon: Users,
      title: 'Comunidad Privada',
      desc: 'Red de ejecutivos y soporte continuo'
    }
  ];

  const benefits = [
    'Escalamiento interno masivo',
    'Onboarding acelerado de equipos',
    'Formación continua y flexible',
    'ROI medible en productividad'
  ];

  
  const whatsappMessage = "Hola, quisiera solicitar acceso a la demo de los cursos pregrabados.";
  const whatsappNumber = "573012463004"; 

  return (
    <section id="pregrabados" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Formación Escalable con Acompañamiento Experto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Perfecto para equipos grandes o con horarios flexibles
          </p>
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-800 px-4 py-2 rounded-full">
            <Video className="w-5 h-5" />
            <span className="font-medium">Virtual Asincrónica + Sesiones Síncronas</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-cyan-200">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Ideal Para:</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Estructura del Programa</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-cyan-200">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-cyan-600" />
                    <span className="font-semibold text-gray-900">Duración</span>
                  </div>
                  <span className="text-cyan-600 font-bold">6-8 Semanas</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-cyan-200">
                  <div className="flex items-center space-x-3">
                    <Video className="w-5 h-5 text-cyan-600" />
                    <span className="font-semibold text-gray-900">Contenido</span>
                  </div>
                  <span className="text-cyan-600 font-bold">20+ Horas</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-cyan-200">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-cyan-600" />
                    <span className="font-semibold text-gray-900">Sesiones Live</span>
                  </div>
                  <span className="text-cyan-600 font-bold">8-16 Horas</span>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ruta de Aprendizaje</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <span className="text-gray-700">Módulo Base: "El Despertar Digital"</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <span className="text-gray-700">Herramientas Específicas por Área</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <span className="text-gray-700">Implementación y Seguimiento</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <span className="text-gray-700">Evaluación y Certificación</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 w-full flex items-center justify-center group shadow-lg hover:shadow-xl"
              >
                <Play className="mr-2 w-5 h-5" />
                Solicita Acceso Demo
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Preview gratuito • Sin compromiso • Evaluación personalizada
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CursosPregrabados;