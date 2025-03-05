
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import Timeline from '../components/home/Timeline';
import Gallery from '../components/home/Gallery';
import VideoSection from '../components/home/VideoSection';
import { MapPin, GraduationCap, BookOpen, History } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <span className="text-sm uppercase tracking-wider text-primary/70">Виртуальный тур</span>
                <h2 className="font-serif text-4xl lg:text-5xl font-bold mt-2 mb-6">Погрузитесь в богатую историю университета</h2>
                <p className="text-muted-foreground text-lg">
                  Добро пожаловать в интерактивное путешествие по историческому наследию нашего университета. 
                  Эта виртуальная экскурсия позволит вам исследовать ключевые моменты развития, 
                  познакомиться с выдающимися личностями и увидеть, как менялся облик университета на протяжении десятилетий.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1000&q=80" 
                  alt="University computers" 
                  className="rounded-lg shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </section>
        
        <Timeline />
        
        {/* Features */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="section-title">Исследуйте историю</h2>
              <p className="section-subtitle mx-auto">
                Этот виртуальный тур предлагает различные способы познакомиться с историей университета
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link to="/landmarks" className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow group">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="text-primary" size={32} />
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">Достопримечательности</h3>
                <p className="text-muted-foreground">Исторические здания и памятные места университетского городка</p>
              </Link>
              
              <Link to="/people" className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow group">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="text-primary" size={32} />
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">Выдающиеся личности</h3>
                <p className="text-muted-foreground">Известные выпускники, преподаватели и ученые, связанные с университетом</p>
              </Link>
              
              <Link to="/media-archive" className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow group">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="text-primary" size={32} />
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">Медиа архив</h3>
                <p className="text-muted-foreground">Коллекция фотографий, видео и аудиозаписей из университетского архива</p>
              </Link>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 group">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <History className="text-primary" size={32} />
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">Интерактивная хронология</h3>
                <p className="text-muted-foreground">Ключевые события и даты в истории развития университета</p>
              </div>
            </div>
          </div>
        </section>
        
        <Gallery />
        <VideoSection />
        
        {/* Call to Action */}
        <section className="py-20 bg-primary">
          <div className="container text-center text-white">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
              Продолжить исследование истории университета
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Посетите наши тематические разделы, чтобы погрузиться глубже в историческое наследие
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/landmarks" className="px-8 py-3 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Исторические места
              </Link>
              <Link to="/people" className="px-8 py-3 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
                Известные личности
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
