
import { useState } from 'react';
import { X } from 'lucide-react';

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

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Исторические фотографии</h2>
          <p className="section-subtitle mx-auto">
            Виртуальная галерея изображений, запечатлевших важные моменты из истории университета
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="photo-card relative overflow-hidden rounded-lg shadow-md transform-hover cursor-pointer h-72"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="photo-overlay">
                <div>
                  <h3 className="text-white font-serif text-xl">{image.alt}</h3>
                  <p className="text-white/80 text-sm">{image.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full animate-scale-in">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="w-full rounded-lg max-h-[80vh] object-contain"
            />
            <div className="bg-white p-6 rounded-b-lg">
              <h3 className="text-xl font-serif font-medium">{selectedImage.alt} ({selectedImage.year})</h3>
              <p className="text-muted-foreground mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
