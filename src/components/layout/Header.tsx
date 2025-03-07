
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

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

        {/* Кнопка мобильного меню */}
        <button 
          className="md:hidden flex items-center text-gray-900 z-50"
          onClick={toggleMenu}
          aria-label="Переключить меню"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Новое мобильное меню с использованием Tabs из shadcn/ui */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-white z-40 md:hidden"
          style={{ top: '0', bottom: '0', left: '0', right: '0' }}
        >
          <div className="flex flex-col h-full pt-20 pb-6 px-6">
            <div className="text-2xl font-serif font-medium mb-8">Меню</div>
            
            <nav className="flex-1">
              <Tabs defaultValue="main" className="w-full">
                <TabsList className="w-full grid grid-cols-2 mb-6">
                  <TabsTrigger value="main">Основное</TabsTrigger>
                  <TabsTrigger value="more">Дополнительно</TabsTrigger>
                </TabsList>
                
                <div className="space-y-2">
                  <Link 
                    to="/" 
                    className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={closeMenu}
                  >
                    <span className="text-lg">Главная</span>
                    <ChevronRight size={18} />
                  </Link>
                  
                  <Link 
                    to="/landmarks" 
                    className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={closeMenu}
                  >
                    <span className="text-lg">Достопримечательности</span>
                    <ChevronRight size={18} />
                  </Link>
                  
                  <Link 
                    to="/people" 
                    className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={closeMenu}
                  >
                    <span className="text-lg">Выдающиеся личности</span>
                    <ChevronRight size={18} />
                  </Link>
                  
                  <Link 
                    to="/media-archive" 
                    className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={closeMenu}
                  >
                    <span className="text-lg">Медиа архив</span>
                    <ChevronRight size={18} />
                  </Link>
                </div>
              </Tabs>
            </nav>
            
            <div className="mt-auto pt-6 border-t border-gray-100">
              <div className="text-sm text-gray-500">© 2023 University History</div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
