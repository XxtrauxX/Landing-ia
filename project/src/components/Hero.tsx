import React, { useState } from 'react';
import { Play, ArrowRight, Award, Users, Clock, X } from 'lucide-react';

const Hero = () => {
 
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  

  const videoUrl = "https://www.youtube.com/watch?v=jqpZ13qHdqM&ab_channel=LaBestiadelasCompras";

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-blue-300 rounded-full animate-ping"></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-indigo-400 rounded-full animate-bounce"></div>
          <div className="absolute top-60 left-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-60 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center space-x-2 mb-6">
                <Award className="w-6 h-6 text-cyan-400" />
                <span className="text-cyan-400 font-semibold">Formación Ejecutiva Premium</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Lidera la Era de la{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Inteligencia Artificial
                </span>{' '}
                con Formación Ejecutiva de Alto Nivel
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-200 mb-8 leading-relaxed">
                Capacitación estratégica y práctica en IA para líderes empresariales. 
                Modalidades flexibles, resultados inmediatos.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-cyan-400">3x</div>
                  <div className="text-sm text-slate-300">Productividad</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-cyan-400">500+</div>
                  <div className="text-sm text-slate-300">Ejecutivos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-cyan-400">95%</div>
                  <div className="text-sm text-slate-300">Satisfacción</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center group shadow-lg hover:shadow-xl">
                  Solicita Más Información :D
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
               
                <button 
                  onClick={() => setIsVideoModalOpen(true)}
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Ver demostración
                </button>
              </div>
              
              <div className="mt-8 flex items-center space-x-6 text-slate-300 text-sm">
                <div className="flex items-center space-x-2"><Users className="w-4 h-4" /><span>Para Alta Gerencia</span></div>
                <div className="flex items-center space-x-2"><Clock className="w-4 h-4" /><span>Resultados en 5 Semanas</span></div>
                <div className="flex items-center space-x-2"><Award className="w-4 h-4" /><span>Certificación Empresarial</span></div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 shadow-2xl">
                <div className="space-y-4">
                  <div className="h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full w-3/4"></div>
                  <div className="h-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full w-1/2"></div>
                  <div className="h-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full w-5/6"></div>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-white/20 rounded-lg p-4 text-center border border-cyan-400/20"><div className="text-2xl font-bold text-cyan-400">15H</div><div className="text-sm text-slate-200">Maestría</div></div>
                    <div className="bg-white/20 rounded-lg p-4 text-center border border-cyan-400/20"><div className="text-2xl font-bold text-cyan-400">3M</div><div className="text-sm text-slate-200">Consultoría</div></div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-3 animate-bounce shadow-lg"><Award className="w-6 h-6 text-white" /></div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-3 animate-pulse shadow-lg"><Users className="w-6 h-6 text-white" /></div>
            </div>
          </div>
        </div>
      </section>

      
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 animate-fade-in-up">
          <div className="bg-slate-900 rounded-lg shadow-2xl w-full max-w-4xl relative aspect-video border-2 border-cyan-500/50">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-4 -right-4 bg-white text-slate-900 rounded-full p-2 hover:bg-cyan-400 hover:scale-110 transition-all z-10"
              aria-label="Cerrar video"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={videoUrl}
              title="Video de Demostración"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;