
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { cn } from '@/lib/utils';

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
    alt: "Главное здание университета",
    year: "1950",
    description: "Историческое фото главного здания университета вскоре после его постройки"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&q=80",
    alt: "Актовый зал",
    year: "1965",
    description: "Торжественное открытие нового актового зала, ставшего центром культурной жизни университета"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80",
    alt: "Библиотека",
    year: "1978",
    description: "Университетская библиотека, которая на тот момент насчитывала более 500,000 томов"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    alt: "Компьютерный центр",
    year: "1992",
    description: "Открытие первого компьютерного центра - начало цифровой эры в университете"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    alt: "Современная лаборатория",
    year: "2010",
    description: "Исследовательская лаборатория, оборудованная по последнему слову техники"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    alt: "Электронная библиотека",
    year: "2018",
    description: "Современный центр электронных ресурсов, доступных студентам и преподавателям"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const openLightbox = (image: typeof images[0], index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const newIndex = direction === 'prev' 
      ? (selectedIndex - 1 + images.length) % images.length 
      : (selectedIndex + 1) % images.length;
    
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700">
            Исторические фотографии
          </h2>
          <p className="section-subtitle mx-auto">
            Виртуальная галерея изображений, запечатлевших важные моменты из истории университета
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={image.id} 
              className="photo-card group relative overflow-hidden rounded-lg shadow-md hover-lift cursor-pointer h-72 glass-card"
              onClick={() => openLightbox(image, index)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="photo-overlay bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-100">
                <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-4">
                  <h3 className="text-white font-serif text-xl">{image.alt}</h3>
                  <p className="text-white/80 text-sm">{image.year}</p>
                  <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-5 h-5 text-white" />
                    <span className="text-white/90 text-sm">Увеличить</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox with navigation */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-radial from-blue-900/5 to-transparent"></div>
          <div className="relative max-w-5xl w-full animate-scale-in">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2 bg-black/20 rounded-full backdrop-blur-sm z-10"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <X size={24} />
            </button>
            
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full backdrop-blur-sm bg-black/20 hover:bg-black/40 transition-colors z-10"
              onClick={() => navigateImage('prev')}
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full backdrop-blur-sm bg-black/20 hover:bg-black/40 transition-colors z-10"
              onClick={() => navigateImage('next')}
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
            
            <div className={cn(
              "transition-opacity duration-300",
              selectedImage ? "opacity-100" : "opacity-0"
            )}>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full rounded-lg max-h-[70vh] object-contain"
              />
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-b-lg border border-white/20">
                <h3 className="text-xl font-serif font-medium text-white">{selectedImage.alt} ({selectedImage.year})</h3>
                <p className="text-white/80 mt-2">{selectedImage.description}</p>
                <div className="mt-4 text-xs text-white/60">
                  Фото {selectedIndex + 1} из {images.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
