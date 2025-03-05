
import { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarDays, FileAudio, FileImage, FileVideo, Search } from 'lucide-react';

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
    title: "Главное здание университета",
    year: "1950",
    category: "Архитектура"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&q=80",
    title: "Открытие нового актового зала",
    year: "1965",
    category: "События"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80",
    title: "Библиотека университета",
    year: "1978",
    category: "Интерьеры"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    title: "Первый компьютерный класс",
    year: "1992",
    category: "Технологии"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    title: "Исследовательская лаборатория",
    year: "2010",
    category: "Наука"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    title: "Современный центр электронных ресурсов",
    year: "2018",
    category: "Технологии"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    title: "Студенческий фестиваль",
    year: "2005",
    category: "События"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    title: "Университетский кампус",
    year: "2015",
    category: "Архитектура"
  }
];

const videos = [
  {
    id: 1,
    src: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    title: "Исторический обзор университета",
    year: "2015",
    duration: "15:24"
  },
  {
    id: 2,
    src: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    title: "Юбилейное торжество - 50 лет университету",
    year: "1995",
    duration: "42:10"
  },
  {
    id: 3,
    src: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    title: "Интервью с ректором",
    year: "2020",
    duration: "22:15"
  },
  {
    id: 4,
    src: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    title: "День открытых дверей",
    year: "2019",
    duration: "18:40"
  }
];

const audioRecordings = [
  {
    id: 1,
    title: "Воспоминания первого ректора",
    year: "1980",
    duration: "45:12",
    description: "Интервью с основателем университета о первых годах его существования."
  },
  {
    id: 2,
    title: "Лекция профессора Иванова по теоретической физике",
    year: "1975",
    duration: "82:30",
    description: "Уникальная запись знаменитой лекции, которая изменила представление о квантовой механике."
  },
  {
    id: 3,
    title: "История факультета естественных наук",
    year: "1990",
    duration: "62:18",
    description: "Аудиоэкскурсия по истории становления и развития факультета."
  },
  {
    id: 4,
    title: "Университетский гимн - эволюция",
    year: "2005",
    duration: "15:45",
    description: "История создания и изменения университетского гимна с аудиопримерами разных версий."
  },
  {
    id: 5,
    title: "Открытие нового корпуса в 1995 году",
    year: "1995",
    duration: "28:10",
    description: "Репортаж с церемонии открытия современного корпуса естественных наук."
  }
];

const MediaArchive = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPhotos = photos.filter(photo => 
    photo.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    photo.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    photo.year.includes(searchTerm)
  );

  const filteredVideos = videos.filter(video => 
    video.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    video.year.includes(searchTerm)
  );

  const filteredAudio = audioRecordings.filter(audio => 
    audio.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    audio.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    audio.year.includes(searchTerm)
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container py-12">
          <div className="text-center mb-16">
            <span className="inline-block text-sm uppercase tracking-wider text-primary/70">Виртуальный тур</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6">Медиа архив</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Исследуйте богатую коллекцию исторических фотографий, видео и аудиозаписей из архива университета
            </p>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Поиск по архиву..."
                className="w-full py-3 pl-10 pr-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <Tabs defaultValue="photos" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="photos" className="flex items-center gap-2">
                <FileImage size={16} />
                <span>Фотографии</span>
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center gap-2">
                <FileVideo size={16} />
                <span>Видео</span>
              </TabsTrigger>
              <TabsTrigger value="audio" className="flex items-center gap-2">
                <FileAudio size={16} />
                <span>Аудио</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="photos" className="space-y-4">
              {filteredPhotos.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">По вашему запросу ничего не найдено.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredPhotos.map((photo) => (
                    <div key={photo.id} className="photo-card relative overflow-hidden rounded-lg shadow-md transform-hover cursor-pointer group">
                      <img 
                        src={photo.src} 
                        alt={photo.title} 
                        className="w-full aspect-square object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                          <h3 className="text-white font-medium text-lg">{photo.title}</h3>
                          <div className="flex items-center space-x-2 text-white/80 text-sm mt-1">
                            <CalendarDays size={14} />
                            <span>{photo.year}</span>
                            <span>•</span>
                            <span>{photo.category}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="videos" className="space-y-4">
              {filteredVideos.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">По вашему запросу ничего не найдено.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredVideos.map((video) => (
                    <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                      <div className="relative aspect-video group">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <FileVideo size={32} className="text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-lg mb-1">{video.title}</h3>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <span>{video.year}</span>
                          <span className="mx-2">•</span>
                          <span>{video.duration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="audio" className="space-y-4">
              {filteredAudio.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">По вашему запросу ничего не найдено.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredAudio.map((audio) => (
                    <div key={audio.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <FileAudio className="text-primary" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-lg mb-1">{audio.title}</h3>
                          <div className="flex items-center text-muted-foreground text-sm mb-2">
                            <span>{audio.year}</span>
                            <span className="mx-2">•</span>
                            <span>{audio.duration}</span>
                          </div>
                          <p className="text-muted-foreground text-sm">{audio.description}</p>
                        </div>
                        <button className="py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors">
                          Слушать
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MediaArchive;
