
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Landmark, Users, FileImage } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Отслеживание прокрутки страницы
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

        {/* Мобильное меню с использованием Sheet из shadcn/ui */}
        <Sheet>
          <SheetTrigger asChild>
            <button 
              className="md:hidden flex items-center text-gray-900"
              aria-label="Открыть меню"
            >
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-80 p-0">
            <div className="h-full flex flex-col">
              <div className="py-6 px-6 border-b">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl font-medium">Меню</span>
                </div>
              </div>
              
              <div className="flex-1 overflow-auto py-4">
                <nav className="px-4 space-y-1">
                  <Link 
                    to="/" 
                    className="flex items-center gap-3 px-3 py-3 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <Home size={20} />
                    <span className="font-medium">Главная</span>
                  </Link>
                  
                  <Link 
                    to="/landmarks" 
                    className="flex items-center gap-3 px-3 py-3 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <Landmark size={20} />
                    <span className="font-medium">Достопримечательности</span>
                  </Link>
                  
                  <Link 
                    to="/people" 
                    className="flex items-center gap-3 px-3 py-3 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <Users size={20} />
                    <span className="font-medium">Выдающиеся личности</span>
                  </Link>
                  
                  <Link 
                    to="/media-archive" 
                    className="flex items-center gap-3 px-3 py-3 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <FileImage size={20} />
                    <span className="font-medium">Медиа архив</span>
                  </Link>
                </nav>
              </div>
              
              <div className="mt-auto py-4 px-6 border-t border-gray-100">
                <div className="text-sm text-gray-500">© 2023 University History</div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
