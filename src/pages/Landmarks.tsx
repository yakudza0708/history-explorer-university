
import { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { MapPin, Calendar, Clock } from 'lucide-react';

const landmarks = [
  {
    id: 1,
    name: "Главное здание",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
    year: "1945",
    description: "Историческое здание, построенное в классическом стиле, которое стало символом университета. В нем расположены административные помещения, актовый зал и ряд учебных аудиторий. Здание было спроектировано известным архитектором и является образцом послевоенной монументальной архитектуры.",
    location: "Центральная площадь кампуса"
  },
  {
    id: 2,
    name: "Старая библиотека",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&q=80",
    year: "1950",
    description: "Библиотека является одним из старейших зданий комплекса и содержит редкие книжные коллекции, рукописи и исторические документы. Интерьер здания отличается величественными читальными залами с высокими потолками и оригинальными деревянными книжными шкафами.",
    location: "Восточная часть кампуса"
  },
  {
    id: 3,
    name: "Физический факультет",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80",
    year: "1957",
    description: "Здание физического факультета было построено в период расцвета научных исследований. Его лаборатории оснащались самым современным по тем временам оборудованием. Здесь проводились ключевые эксперименты, которые внесли значительный вклад в отечественную физическую науку.",
    location: "Научный квартал кампуса"
  },
  {
    id: 4,
    name: "Мемориальный сквер",
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=800&q=80",
    year: "1965",
    description: "Сквер был создан в память о студентах и преподавателях, погибших во время Великой Отечественной войны. В центре сквера установлен памятник, а также аллея с именными деревьями, посаженными в честь героев.",
    location: "Южная часть кампуса"
  },
  {
    id: 5,
    name: "Новый корпус естественных наук",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80",
    year: "1995",
    description: "Современное здание, в котором расположены факультеты химии, биологии и наук о Земле. Здание отличается инновационной архитектурой, большими стеклянными поверхностями и энергоэффективными технологиями. Оснащено современными лабораториями и исследовательскими центрами.",
    location: "Западная часть кампуса"
  },
  {
    id: 6,
    name: "Студенческий центр",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    year: "2005",
    description: "Многофункциональный комплекс, созданный для внеучебной деятельности студентов. Включает в себя актовый зал,спортивные площадки, кафе и места для отдыха. Здесь проводятся различные мероприятия, конференции и студенческие фестивали.",
    location: "Центральная часть кампуса"
  }
];

const Landmarks = () => {
  const [selectedLandmark, setSelectedLandmark] = useState(landmarks[0]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container py-12">
          <div className="text-center mb-16">
            <span className="inline-block text-sm uppercase tracking-wider text-primary/70">Виртуальный тур</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6">Исторические достопримечательности</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Исследуйте знаковые здания и места, которые сформировали облик университета и стали свидетелями его богатой истории
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Landmarks List */}
            <div className="space-y-4">
              {landmarks.map((landmark) => (
                <button
                  key={landmark.id}
                  onClick={() => setSelectedLandmark(landmark)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    selectedLandmark.id === landmark.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <h3 className="font-serif text-lg font-medium">{landmark.name}</h3>
                  <p className={`text-sm mt-1 ${
                    selectedLandmark.id === landmark.id ? 'text-white/80' : 'text-muted-foreground'
                  }`}>
                    {landmark.year}
                  </p>
                </button>
              ))}
            </div>

            {/* Selected Landmark Details */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-[400px]">
                <img 
                  src={selectedLandmark.image} 
                  alt={selectedLandmark.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <h2 className="font-serif text-3xl font-bold mb-2">{selectedLandmark.name}</h2>
                    <div className="flex items-center space-x-4 text-white/80">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Год постройки: {selectedLandmark.year}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{selectedLandmark.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-muted-foreground leading-relaxed">{selectedLandmark.description}</p>
                
                <div className="mt-8 flex items-center space-x-4">
                  <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    Виртуальный тур
                  </button>
                  <button className="px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    Больше фотографий
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Landmarks;
