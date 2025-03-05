
import { useState } from 'react';

const timelineEvents = [
  {
    id: 1,
    year: "1945",
    title: "Основание университета",
    description: "После окончания Второй мировой войны был основан университет как символ новой эры образования и научных исследований. Первый набор состоял всего из 120 студентов и 15 преподавателей.",
  },
  {
    id: 2,
    year: "1960",
    title: "Создание научных школ",
    description: "Формирование ведущих научных школ в области физики, математики и химии. В этот период в университете работали выдающиеся ученые, чьи труды получили международное признание.",
  },
  {
    id: 3,
    year: "1975",
    title: "Расширение кампуса",
    description: "Масштабное строительство новых учебных корпусов и лабораторий, которые и сегодня составляют основу университетского городка. Количество студентов выросло до 5000 человек.",
  },
  {
    id: 4,
    year: "1988",
    title: "Эпоха реформ",
    description: "Период активной модернизации образовательных программ, внедрение новых методик преподавания и начало международного сотрудничества с ведущими университетами мира.",
  },
  {
    id: 5,
    year: "2001",
    title: "Цифровая трансформация",
    description: "Развитие IT-инфраструктуры университета, создание электронной библиотеки и виртуальных лабораторий. Начало эпохи дистанционного образования.",
  },
  {
    id: 6,
    year: "2015",
    title: "Интеграция в мировое образовательное пространство",
    description: "Получение статуса исследовательского университета международного уровня, реализация совместных научных проектов с ведущими мировыми научными центрами.",
  },
  {
    id: 7,
    year: "Настоящее время",
    title: "Инновации и будущее",
    description: "Сегодня университет является ведущим центром образования, науки и инноваций, объединяющим традиции и современные технологии для подготовки специалистов будущего.",
  }
];

const Timeline = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white" id="timeline">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Ключевые моменты истории</h2>
          <p className="section-subtitle mx-auto">
            Исследуйте важнейшие вехи в развитии нашего университета от момента основания до наших дней
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto pl-4">
          {timelineEvents.map((event) => (
            <div key={event.id} className="timeline-item">
              <div className="timeline-date">{event.year}</div>
              <h3 className="text-xl font-serif font-medium mb-2">
                {event.title}
              </h3>
              <div 
                className={`timeline-content overflow-hidden transition-all duration-500 ${
                  expandedId === event.id || expandedId === null 
                    ? 'max-h-40' 
                    : 'max-h-0 opacity-50'
                }`}
              >
                <p className="text-muted-foreground">
                  {event.description}
                </p>
              </div>
              <button 
                className="mt-2 text-sm text-primary hover:text-primary/80 transition-colors"
                onClick={() => setExpandedId(expandedId === event.id ? null : event.id)}
              >
                {expandedId === event.id ? 'Свернуть' : 'Подробнее'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
