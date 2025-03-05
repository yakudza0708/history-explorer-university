
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

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
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="animate-fade-up">
          <span className="inline-block font-sans text-sm md:text-base uppercase tracking-wider text-white/80 mb-4 border-b pb-2">
            Виртуальный тур
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6 max-w-4xl mx-auto">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            {slides[currentSlide].subtitle}
          </p>
          <button 
            className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
            onClick={scrollToContent}
          >
            Начать тур
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToContent}
            aria-label="Scroll down" 
            className="text-white opacity-80 hover:opacity-100 transition-opacity"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
