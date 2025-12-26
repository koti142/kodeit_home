import React from 'react';
import { Moon, Sun } from 'lucide-react';
import logo from '../assets/logo.png';
import { useDarkMode } from '../contexts/DarkModeContext';

function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleDashboardClick = () => {
    const element = document.getElementById('features');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 shadow-sm transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 border-b border-gray-800' : 'bg-white'
    }`}>
      <div className="w-full px-3 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logo} alt="KODEIT Logo" className="w-12 h-12 object-contain" />
          <span className={`font-bold text-lg transition-colors ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            KODEIT
          </span>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, 'about')}
            className={`transition-colors font-medium cursor-pointer hover:text-cyan-500 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Why KODEIT
          </a>
          <a 
            href="#curriculum" 
            onClick={(e) => handleNavClick(e, 'curriculum')}
            className={`transition-colors font-medium cursor-pointer hover:text-cyan-500 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Curriculum
          </a>
          <a 
            href="#features" 
            onClick={(e) => handleNavClick(e, 'features')}
            className={`transition-colors font-medium cursor-pointer hover:text-cyan-500 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Dashboard
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className={`transition-colors font-medium cursor-pointer hover:text-cyan-500 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Right: Dark mode toggle and Access Dashboard button */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
              darkMode 
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button 
            onClick={handleDashboardClick}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
          >
            Access Dashboard
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

