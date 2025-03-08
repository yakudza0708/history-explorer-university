
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Landmark, Users, FileImage } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  // Отслеживание прокрутки страницы
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Устанавливаем активную ссылку при загрузке страницы
  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-gradient-to-r from-black/30 to-transparent py-6'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className={`font-serif text-2xl font-semibold tracking-tight transition-all duration-300 ${
            scrolled ? 'text-primary' : 'text-white'
          }`}
        >
          <span className="relative inline-block">
            University History
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </span>
        </Link>

        {/* Десктопная навигация */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { path: '/', name: 'Главная', icon: <Home size={18} /> },
            { path: '/landmarks', name: 'Достопримечательности', icon: <Landmark size={18} /> },
            { path: '/people', name: 'Выдающиеся личности', icon: <Users size={18} /> },
            { path: '/media-archive', name: 'Медиа архив', icon: <FileImage size={18} /> }
          ].map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`group flex items-center gap-1.5 relative ${
                scrolled ? 'text-foreground' : 'text-white'
              } hover:text-primary transition-colors duration-300 ${
                activeLink === item.path ? 'font-medium' : ''
              }`}
              onClick={() => setActiveLink(item.path)}
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.icon}
              </span>
              <span>{item.name}</span>
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                activeLink === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
          ))}
        </nav>

        {/* Мобильное меню с использованием Sheet из shadcn/ui */}
        <Sheet>
          <SheetTrigger asChild>
            <button 
              className={`md:hidden flex items-center transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
              aria-label="Открыть меню"
            >
              <Menu size={28} className="transition-transform hover:scale-110 duration-300" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-80 p-0 border-none">
            <div className="h-full flex flex-col bg-gradient-to-b from-primary/5 to-primary/10">
              <div className="py-6 px-6 border-b border-primary/10">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Меню</span>
                </div>
              </div>
              
              <div className="flex-1 overflow-auto py-6">
                <nav className="px-4 space-y-2">
                  {[
                    { path: '/', name: 'Главная', icon: <Home className="text-primary" size={20} /> },
                    { path: '/landmarks', name: 'Достопримечательности', icon: <Landmark className="text-primary" size={20} /> },
                    { path: '/people', name: 'Выдающиеся личности', icon: <Users className="text-primary" size={20} /> },
                    { path: '/media-archive', name: 'Медиа архив', icon: <FileImage className="text-primary" size={20} /> }
                  ].map((item) => (
                    <Link 
                      key={item.path}
                      to={item.path} 
                      className={`flex items-center gap-3 px-3 py-3 rounded-md transition-all duration-300 ${
                        activeLink === item.path 
                          ? 'bg-primary/10 text-primary' 
                          : 'hover:bg-primary/5 text-foreground hover:text-primary'
                      }`}
                      onClick={() => setActiveLink(item.path)}
                    >
                      <span className={`transition-transform duration-300 ${activeLink === item.path ? 'scale-110' : ''}`}>
                        {item.icon}
                      </span>
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  ))}
                </nav>
              </div>
              
              <div className="mt-auto py-4 px-6 border-t border-gray-100">
                <div className="text-sm text-gray-500 animate-pulse">© 2024 University History</div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
