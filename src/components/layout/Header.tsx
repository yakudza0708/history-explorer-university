
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl font-semibold tracking-tight">
          University History
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link">Главная</Link>
          <Link to="/landmarks" className="nav-link">Достопримечательности</Link>
          <Link to="/people" className="nav-link">Выдающиеся личности</Link>
          <Link to="/media-archive" className="nav-link">Медиа архив</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center text-gray-900"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`
          fixed inset-0 bg-white z-40 pt-20 px-6 transform transition-transform duration-300 ease-in-out md:hidden
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <nav className="flex flex-col space-y-6">
          <Link 
            to="/" 
            className="text-xl py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Главная
          </Link>
          <Link 
            to="/landmarks" 
            className="text-xl py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Достопримечательности
          </Link>
          <Link 
            to="/people" 
            className="text-xl py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Выдающиеся личности
          </Link>
          <Link 
            to="/media-archive" 
            className="text-xl py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Медиа архив
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
