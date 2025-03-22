import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Landmark, Users, FileImage, Sparkles } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveLink(window.location.pathname);
    setAnimateHeader(true);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        animateHeader ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
      } ${
        scrolled 
          ? 'backdrop-blur glassmorphism py-3' 
          : 'bg-gradient-to-r from-black/40 to-transparent py-6'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className={`group font-serif text-2xl font-semibold tracking-tight transition-all duration-300 ${
            scrolled ? 'text-primary' : 'text-white'
          }`}
        >
          <span className="relative inline-flex items-center">
            <Sparkles className={`w-5 h-5 mr-2 animate-pulse-slow ${scrolled ? 'text-primary' : 'text-white/80'}`} />
            <span className="gradient-text from-white to-white/80">University History</span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {[
            { path: '/', name: 'Главная', icon: <Home size={18} className="transition-all duration-300" /> },
            { path: '/landmarks', name: 'Достопримечательности', icon: <Landmark size={18} className="transition-all duration-300" /> },
            { path: '/people', name: 'Выдающиеся личности', icon: <Users size={18} className="transition-all duration-300" /> },
            { path: '/media-archive', name: 'Медиа архив', icon: <FileImage size={18} className="transition-all duration-300" /> }
          ].map((item, index) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`group flex items-center gap-1.5 relative ${
                scrolled ? 'text-foreground' : 'text-white'
              } hover:text-primary transition-all duration-300 ${
                activeLink === item.path ? 'font-medium' : ''
              }`}
              onClick={() => setActiveLink(item.path)}
              style={{ 
                transitionDelay: `${(index + 1) * 100}ms`,
                opacity: animateHeader ? 1 : 0,
                transform: animateHeader ? 'translateY(0)' : 'translateY(-10px)'
              }}
            >
              <span className={`transform transition-all duration-300 ${
                activeLink === item.path ? 'scale-110' : 'opacity-0 group-hover:opacity-100 group-hover:scale-110'
              }`}>
                {item.icon}
              </span>
              <span className="relative overflow-hidden">
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primary/60 opacity-0 transform origin-left transition-transform duration-300 ${
                  activeLink === item.path ? 'opacity-100' : 'group-hover:opacity-100'
                }`}></span>
              </span>
            </Link>
          ))}
        </nav>

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
            <div className="h-full flex flex-col dark-glassmorphism">
              <div className="py-6 px-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Меню</span>
                  <SheetTrigger asChild>
                    <button className="text-white/80 hover:text-white transition-colors">
                      <X size={24} />
                    </button>
                  </SheetTrigger>
                </div>
              </div>
              
              <div className="flex-1 overflow-auto py-6">
                <nav className="px-4 space-y-2">
                  {[
                    { path: '/', name: 'Главная', icon: <Home className="text-blue-500" size={20} /> },
                    { path: '/landmarks', name: 'Достопримечательности', icon: <Landmark className="text-blue-500" size={20} /> },
                    { path: '/people', name: 'Выдающиеся личности', icon: <Users className="text-blue-500" size={20} /> },
                    { path: '/media-archive', name: 'Медиа архив', icon: <FileImage className="text-blue-500" size={20} /> }
                  ].map((item, index) => (
                    <Link 
                      key={item.path}
                      to={item.path} 
                      className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-300 ${
                        activeLink === item.path 
                          ? 'bg-white/10 text-white' 
                          : 'hover:bg-white/5 text-white/80 hover:text-white'
                      }`}
                      onClick={() => setActiveLink(item.path)}
                      style={{ 
                        transitionDelay: `${(index + 1) * 50}ms`,
                        animation: 'fade-in 0.5s forwards',
                        animationDelay: `${(index + 1) * 50}ms`,
                        opacity: 0
                      }}
                    >
                      <span className={`transition-transform duration-300 ${activeLink === item.path ? 'scale-110' : ''}`}>
                        {item.icon}
                      </span>
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  ))}
                </nav>
              </div>
              
              <div className="mt-auto py-4 px-6 border-t border-white/10">
                <div className="text-sm text-white/60 animate-pulse">© 2024 University History</div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
