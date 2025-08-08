import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Youtube, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          
          <div className="lg:col-span-2">
            {/* --- BLOQUE DEL LOGO REEMPLAZADO --- */}
            <div className="mb-6">
              <img 
                src="https://britcham.com.co/wp-content/uploads/2024/09/Campuslands-SAS-TALENTO-HUMANO-PYME.png"
                alt="Campuslands Logo" 
                className="h-16 w-auto" // Puedes ajustar el tamaño aquí si lo necesitas
              />
            </div>
    
            <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/30 rounded-lg p-6 border border-cyan-700/50">
              <p className="text-cyan-100 italic text-lg leading-relaxed">
                "La diferencia entre líderes exitosos y los que fracasan en la era de la IA no está 
                en la tecnología que usan, sino en qué tan rápido la adoptan estratégicamente."
              </p>
            </div>
          </div>

          
          <div>
            <h3 className="text-xl font-bold mb-6 text-cyan-400">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Email</p>
                  <a href="mailto:contacto@ia-academy.com" className="text-white hover:text-cyan-400 transition-colors">
                    contacto@ia-academy.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">WhatsApp</p>
                  <a href="https://wa.me/57XXXXXXXXX" className="text-white hover:text-cyan-400 transition-colors">
                    +57 XXX XXX XXXX
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Campus</p>
                  <p className="text-white">
                    Bucaramanga, Colombia<br />
                    Zona Franca - Santander
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          <div>
            <h3 className="text-xl font-bold mb-6 text-cyan-400">Síguenos</h3>
            
            <div className="space-y-4 mb-8">
              <a href="https://linkedin.com/company/ia-academy" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                <Linkedin className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                <span>LinkedIn</span>
              </a>
              
              <a href="https://youtube.com/@ia-academy" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                <Youtube className="w-5 h-5 text-red-400 group-hover:text-red-300" />
                <span>YouTube</span>
              </a>
              
              <a href="https://instagram.com/ia.academy" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                <Instagram className="w-5 h-5 text-pink-400 group-hover:text-pink-300" />
                <span>Instagram</span>
              </a>
            </div>

            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <h4 className="font-semibold text-white mb-2">Web Oficial</h4>
              <a href="https://www.ia-academy.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                www.ia-academy.com
              </a>
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 IA Academy. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Política de Cookies</a>
            </div>
          </div>
        </div>
      </div>

      
      <a
        href="https://wa.me/5730182734"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </footer>
  );
};

export default Footer;