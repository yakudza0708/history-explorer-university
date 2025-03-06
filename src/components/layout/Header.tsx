
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

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

  // Toggle menu and control body scroll
  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    
    // Block body scroll when menu is open
    if (newMenuState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  // Close menu when clicking a link
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  // Ensure body scroll is restored when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

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
          className="md:hidden flex items-center text-gray-900 z-60"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - Improved version */}
      <div 
        className={`
          fixed inset-0 bg-gradient-to-b from-white to-white/95 backdrop-blur-sm z-40 
          transform transition-all duration-300 ease-in-out md:hidden overflow-y-auto
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          flex flex-col pt-24 px-6
        `}
      >
        <nav className="flex flex-col space-y-4 w-full">
          <Link 
            to="/" 
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            <span className="text-xl font-medium">Главная</span>
            <ChevronRight size={18} className="text-primary/70" />
          </Link>
          
          <Link 
            to="/landmarks" 
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            <span className="text-xl font-medium">Достопримечательности</span>
            <ChevronRight size={18} className="text-primary/70" />
          </Link>
          
          <Link 
            to="/people" 
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            <span className="text-xl font-medium">Выдающиеся личности</span>
            <ChevronRight size={18} className="text-primary/70" />
          </Link>
          
          <Link 
            to="/media-archive" 
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            <span className="text-xl font-medium">Медиа архив</span>
            <ChevronRight size={18} className="text-primary/70" />
          </Link>
        </nav>
        
        <div className="mt-auto mb-12 pt-8">
          <div className="w-24 h-1 bg-gray-200 rounded-full mx-auto mb-8"></div>
          <Link
            to="/"
            onClick={closeMenu}
            className="block w-full py-3 px-6 bg-primary text-white rounded-lg text-center font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Начать тур
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
