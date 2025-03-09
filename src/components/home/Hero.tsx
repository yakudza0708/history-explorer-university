
import { useState, useEffect, useRef } from 'react';
import { ArrowDown, Sparkles, Star } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=80",
    title: "Виртуальное путешествие в историю",
    subtitle: "Исследуйте богатое наследие нашего университета"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=2000&q=80", 
    title: "От основания до наших дней",
    subtitle: "Откройте для себя важные моменты и личности, сформировавшие нашу историю"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=2000&q=80",
    title: "Наследие и инновации",
    subtitle: "Прошлое и будущее в виртуальном туре по университету"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    setIsLoaded(true);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePosition({ x, y });
      }
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  
  // Параллакс эффект для фона
  const getParallaxStyle = (depth: number) => {
    return {
      transform: `translate(${mousePosition.x * depth * -10}px, ${mousePosition.y * depth * -10}px) scale(${1 + scrollPosition * 0.0002})`,
      opacity: 1 - scrollPosition * 0.001
    };
  };

  // Добавляем частицы для футуристичного эффекта
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1 + Math.random() * 2,
    blur: Math.random() > 0.5,
    delay: Math.random() * 3,
    duration: 10 + Math.random() * 20
  }));

  return (
    <div ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Анимированные фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-[15%] right-[10%] w-64 h-64 rounded-full bg-blue-500/20 blur-3xl animate-blob"
          style={{ animationDelay: '0s' }}
        ></div>
        <div 
          className="absolute bottom-[20%] left-[10%] w-72 h-72 rounded-full bg-purple-500/20 blur-3xl animate-blob"
          style={{ animationDelay: '3s' }}
        ></div>
        <div 
          className="absolute top-[45%] left-[30%] w-56 h-56 rounded-full bg-pink-500/20 blur-3xl animate-blob"
          style={{ animationDelay: '6s' }}
        ></div>
      </div>
      
      {/* Футуристичные частицы */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {particles.map(particle => (
          <div 
            key={particle.id}
            className={`absolute rounded-full ${particle.blur ? 'bg-blue-400/30 blur-sm' : 'bg-white'} animate-float`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
              opacity: 0.7
            }}
          ></div>
        ))}
      </div>
      
      {/* Сетка для футуристичного эффекта */}
      <div className="absolute inset-0 bg-grid-white/5 opacity-20 z-10 pointer-events-none" 
        style={{ transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)` }}></div>
      
      {/* Background slides с параллакс эффектом */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center parallax-layer"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              ...getParallaxStyle(0.5)
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
      ))}
      
      {/* Content с анимацией */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 overflow-hidden z-20">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block font-sans text-sm md:text-base uppercase tracking-wider text-white/80 mb-4 border-b pb-2 relative overflow-hidden group">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400 animate-pulse-slow" />
              <span>Виртуальный тур</span>
              <Sparkles className="w-4 h-4 text-blue-400 animate-pulse-slow" style={{ animationDelay: '1s' }} />
            </div>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 animate-shimmer"></span>
          </span>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl mx-auto relative">
            <span className="relative inline-block overflow-hidden">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-50/90 to-purple-50/80 animate-gradient-x">
                {slides[currentSlide].title}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-gradient-x"></span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
            {slides[currentSlide].subtitle}
          </p>
          
          <button 
            className="px-8 py-3 relative group overflow-hidden rounded-lg border border-white/20 hover-lift"
            onClick={scrollToContent}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600/80 to-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-glass"></span>
            <span className="absolute inset-0 w-full h-full bg-black/30 backdrop-blur-md group-hover:backdrop-blur-lg transition-all duration-500"></span>
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent via-white/5 to-white/10"></span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500"></span>
            <span className="relative z-10 text-white flex items-center gap-2">
              <span>Начать тур</span>
              <Star className="w-4 h-4 animate-pulse" />
            </span>
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce transition-all duration-300 hover:scale-110 z-20">
          <button 
            onClick={scrollToContent}
            aria-label="Scroll down" 
            className="text-white opacity-80 hover:opacity-100 transition-opacity group"
          >
            <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
              <ArrowDown size={24} className="filter drop-shadow-lg" />
            </div>
          </button>
        </div>
        
        {/* Индикатор слайдов */}
        <div className="absolute bottom-8 flex space-x-3 left-1/2 -translate-x-1/2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-3 rounded-full transition-all duration-300 backdrop-blur-sm ${
                currentSlide === index 
                  ? 'bg-gradient-to-r from-blue-400 to-purple-400 w-8' 
                  : 'bg-white/30 hover:bg-white/50 w-3'
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
