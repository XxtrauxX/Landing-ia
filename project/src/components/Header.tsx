import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  const menuItems = [
    { name: 'Inicio', href: '/#home' },
    { name: 'Maestría Ejecutiva', href: '/#maestria' },
    { name: 'Cursos Empresariales', href: '/#cursos' },
    { name: 'Cursos Pregrabados', href: '/#pregrabados' },
    { name: 'FAQ', href: '/#faq' },
  ];
  
  const contactLink = '/#contacto';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let currentSection = '';
      menuItems.forEach(item => {
        if (item.href.startsWith('/#')) {
          const sectionId = item.href.substring(2);
          const section = document.getElementById(sectionId);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
              currentSection = item.href;
            }
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('/#') && location.pathname === '/') {
      e.preventDefault();
      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 lg:h-16"> {/* <-- CAMBIO DE ALTURA AQUÍ */}
          
          <Link to="/" className="flex items-center">
            <img 
              src="https://britcham.com.co/wp-content/uploads/2024/09/Campuslands-SAS-TALENTO-HUMANO-PYME.png"
              alt="Campuslands Logo"
              className="h-10 lg:h-14 w-auto" // <-- CAMBIO DE TAMAÑO DEL LOGO AQUÍ
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`font-medium transition-colors duration-200 relative group ${
                    isScrolled
                      ? (isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600')
                      : (isActive ? 'text-cyan-300' : 'text-white hover:text-cyan-300')
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-400 transform transition-transform duration-200 ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              );
            })}
            <a href={contactLink} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
              Contacto
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 rounded-b-lg">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </Link>
              ))}
              <a href={contactLink} target="_blank" rel="noopener noreferrer" className="w-full text-center block px-3 py-2 bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 text-white rounded-lg font-semibold mt-4 shadow-lg" onClick={() => setIsMenuOpen(false)}>
                Contacto
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;