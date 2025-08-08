import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Clock, Award, ArrowRight, Monitor, User, Video } from 'lucide-react';

const MaestriaExecutiva = () => {
  const modalidades = [
    { icon: Monitor, name: 'Híbrido', desc: 'Presencial + Virtual' },
    { icon: User, name: 'Presencial', desc: 'Campus IA Academy' },
    { icon: Video, name: 'Virtual', desc: '100% Online en Vivo' }
  ];

  const herramientas = [
    'ChatGPT', 'Gemini', 'HeyGen', 'ElevenLabs', 'Gamma', 'Trello'
  ];

  const resultados = [
    'Triplicación de productividad ejecutiva',
    'Automatización segura de tareas clave',
    'Plan estratégico personalizado de adopción de IA'
  ];

  const incluye = [
    'Consultoría post-programa (3 meses)',
    'Acceso a comunidad VIP ejecutiva',
    'Certificación empresarial'
  ];

  return (
    <section id="maestria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Award className="w-8 h-8 text-blue-600" />
            <span className="text-blue-600 font-semibold text-lg">Programa Estrella</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Liderazgo Estratégico en la Era de la IA
          </h2>
          <p className="text-xl lg:text-2xl text-cyan-600 font-semibold mb-4">
            Transforma tu liderazgo y el de tu organización en solo 5 semanas
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dirigido a alta gerencia, juntas directivas y líderes de transformación digital
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-8">
           
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg shadow-blue-200/50 transition-shadow hover:shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Modalidades Disponibles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {modalidades.map((modalidad, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 text-center border-2 border-transparent hover:border-cyan-200 transition-colors">
                    <modalidad.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">{modalidad.name}</div>
                    <div className="text-sm text-gray-600">{modalidad.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            
            
            <div className="rounded-2xl p-8 shadow-lg shadow-blue-200/50 transition-shadow hover:shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Herramientas Empresariales</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {herramientas.map((herramienta, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 text-center border border-cyan-200">
                    <div className="font-semibold text-blue-700">{herramienta}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              
              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-cyan-200 shadow-lg shadow-cyan-200/50 transition-shadow hover:shadow-xl">
                <Clock className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-cyan-600">15 Horas</div>
                <div className="text-sm text-cyan-800">5 semanas intensivas</div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 shadow-lg shadow-blue-200/50 transition-shadow hover:shadow-xl">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">C-Level</div>
                <div className="text-sm text-blue-800">Alta gerencia</div>
              </div>
            </div>
          </div>

          
          <div className="space-y-8">
            
            <div className="rounded-2xl p-8 shadow-lg shadow-blue-200/50 transition-shadow hover:shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Resultados Garantizados</h3>
              <div className="space-y-4">
                {resultados.map((resultado, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{resultado}</span>
                  </div>
                ))}
              </div>
            </div>
            
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-cyan-200 shadow-lg shadow-blue-200/50 transition-shadow hover:shadow-xl">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Incluye</h3>
              <div className="space-y-4">
                {incluye.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/producto/maestria-ejecutiva" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 w-full flex items-center justify-center group shadow-lg hover:shadow-xl">
                Solicita una Consulta Estratégica Gratuita
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-sm text-gray-500 mt-2">
                Sin compromiso • Análisis personalizado de tu organización
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaestriaExecutiva;