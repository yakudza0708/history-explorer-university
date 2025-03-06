
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Отслеживание прокрутки страницы
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Переключение меню и блокировка прокрутки тела
  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    
    // Блокировка прокрутки при открытом меню
    document.body.style.overflow = newMenuState ? 'hidden' : '';
  };

  // Закрытие меню при клике на ссылку
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  // Восстановление прокрутки при размонтировании компонента
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

        {/* Десктопная навигация */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link">Главная</Link>
          <Link to="/landmarks" className="nav-link">Достопримечательности</Link>
          <Link to="/people" className="nav-link">Выдающиеся личности</Link>
          <Link to="/media-archive" className="nav-link">Медиа архив</Link>
        </nav>

        {/* Кнопка мобильного меню (всегда видима) */}
        <button 
          className="md:hidden flex items-center text-gray-900 z-50"
          onClick={toggleMenu}
          aria-label="Переключить меню"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Мобильная навигация - полностью отдельный компонент */}
      <div 
        className={`
          fixed inset-0 bg-white z-40 
          transform transition-all duration-300 ease-in-out md:hidden
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          flex flex-col pt-24 px-6 overflow-y-auto
        `}
        style={{ top: 0 }} // Гарантируем, что начало меню всегда в верхней части экрана
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
      </div>
    </header>
  );
};

export default Header;
