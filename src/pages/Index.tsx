
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import Timeline from '../components/home/Timeline';
import Gallery from '../components/home/Gallery';
import VideoSection from '../components/home/VideoSection';
import { MapPin, GraduationCap, BookOpen, History, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Index = () => {
  // Effect for revealing elements on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Introduction */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-radial from-blue-50 to-transparent opacity-40"></div>
          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll opacity-0 transition-all duration-700 translate-y-10" style={{ transitionDelay: '200ms' }}>
                <span className="text-sm uppercase tracking-wider text-primary/70 flex items-center gap-2 mb-3">
                  <div className="h-px w-6 bg-primary/30"></div>
                  Виртуальный тур
                </span>
                <h2 className="font-serif text-4xl lg:text-5xl font-bold mt-2 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700">
                  Погрузитесь в богатую историю университета
                </h2>
                <p className="text-muted-foreground text-lg">
                  Добро пожаловать в интерактивное путешествие по историческому наследию нашего университета. 
                  Эта виртуальная экскурсия позволит вам исследовать ключевые моменты развития, 
                  познакомиться с выдающимися личностями и увидеть, как менялся облик университета на протяжении десятилетий.
                </p>
                <div className="mt-8">
                  <Link to="/landmarks" className="group inline-flex items-center gap-2 text-primary font-medium hover:underline transition-all">
                    Начать путешествие 
                    <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </div>
              <div className="relative animate-on-scroll opacity-0 transition-all duration-700 translate-y-10" style={{ transitionDelay: '400ms' }}>
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500/5 rounded-full blur-xl animate-pulse-slow"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-500/5 rounded-full blur-xl animate-blob"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover-lift transition-all duration-500 hover:shadow-blue-100/50">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1000&q=80" 
                    alt="University computers" 
                    className="rounded-2xl shadow-lg relative z-10 hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Timeline />
        
        {/* Features */}
        <section className="py-20 relative bg-gradient-to-b from-white to-gray-50">
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
          <div className="container relative z-10">
            <div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-700">
              <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700">
                Исследуйте историю
              </h2>
              <p className="section-subtitle mx-auto">
                Этот виртуальный тур предлагает различные способы познакомиться с историей университета
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link to="/landmarks" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-on-scroll opacity-0 translate-y-10 transition-all" style={{ transitionDelay: '200ms' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-blue-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="text-blue-600" size={32} />
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">Достопримечательности</h3>
                <p className="text-muted-foreground">Исторические здания и памятные места университетского городка</p>
                <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                  <span>Подробнее</span>
                  <ChevronRight size={16} className="ml-1" />
                </div>
              </Link>
              
              <Link to="/people" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-on-scroll opacity-0 translate-y-10 transition-all" style={{ transitionDelay: '400ms' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-purple-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="text-purple-600" size={32} />
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">Выдающиеся личности</h3>
                <p className="text-muted-foreground">Известные выпускники, преподаватели и ученые, связанные с университетом</p>
                <div className="mt-4 flex items-center text-purple-600 text-sm font-medium">
                  <span>Подробнее</span>
                  <ChevronRight size={16} className="ml-1" />
                </div>
              </Link>
              
              <Link to="/media-archive" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-on-scroll opacity-0 translate-y-10 transition-all" style={{ transitionDelay: '600ms' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/10 to-green-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="text-green-600" size={32} />
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">Медиа архив</h3>
                <p className="text-muted-foreground">Коллекция фотографий, видео и аудиозаписей из университетского архива</p>
                <div className="mt-4 flex items-center text-green-600 text-sm font-medium">
                  <span>Подробнее</span>
                  <ChevronRight size={16} className="ml-1" />
                </div>
              </Link>
              
              <div className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-on-scroll opacity-0 translate-y-10 transition-all" style={{ transitionDelay: '800ms' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500/10 to-amber-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <History className="text-amber-600" size={32} />
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">Интерактивная хронология</h3>
                <p className="text-muted-foreground">Ключевые события и даты в истории развития университета</p>
                <div className="mt-4 flex items-center text-amber-600 text-sm font-medium">
                  <span>Подробнее</span>
                  <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Gallery />
        <VideoSection />
        
        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-primary to-blue-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5 bg-grid-white/5 opacity-10"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" style={{ animationDelay: '4s' }}></div>
          
          <div className="container relative z-10 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto text-white animate-on-scroll opacity-0 transition-all duration-700">
              Продолжить исследование истории университета
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto animate-on-scroll opacity-0 transition-all duration-700" style={{ transitionDelay: '200ms' }}>
              Посетите наши тематические разделы, чтобы погрузиться глубже в историческое наследие
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll opacity-0 transition-all duration-700" style={{ transitionDelay: '400ms' }}>
              <Link to="/landmarks" className="px-8 py-3 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition-colors hover-lift">
                Исторические места
              </Link>
              <Link to="/people" className="px-8 py-3 backdrop-blur-sm bg-white/10 border border-white/20 text-white rounded-lg font-medium hover:bg-white/20 transition-colors hover-lift">
                Известные личности
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <style jsx="true">{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .glassmorphism {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
        }
        .bg-grid-white\/5 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </div>
  );
};

export default Index;
