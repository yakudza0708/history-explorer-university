
import { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Award, BookOpen, Calendar, MapPin, User } from 'lucide-react';

const people = [
  {
    id: 1,
    name: "Профессор Иванов Александр Сергеевич",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    years: "1920-1995",
    position: "Ректор (1965-1980)",
    contribution: "Основатель научной школы физики, под руководством которого университет получил международное признание. Автор более 200 научных работ и 5 монографий по теоретической физике. Его исследования в области квантовой механики получили мировое признание.",
    awards: ["Государственная премия по науке (1972)", "Почетный доктор Кембриджского университета (1975)"],
    quote: "Наука – это не только формулы и теории, это прежде всего люди, их мысли и идеи."
  },
  {
    id: 2,
    name: "Петрова Екатерина Николаевна",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    years: "1935-2010",
    position: "Декан исторического факультета (1975-1995)",
    contribution: "Разработала уникальную методику преподавания исторических дисциплин, которая была внедрена во многих университетах страны. Автор фундаментальных исследований по истории образования в 20 веке. Создала архив устной истории университета, записав воспоминания более 500 выпускников.",
    awards: ["Заслуженный деятель науки (1990)", "Медаль за вклад в развитие образования (1985)"],
    quote: "История университета – это не только даты и события, это непрерывный диалог поколений."
  },
  {
    id: 3,
    name: "Доктор Смирнов Виктор Андреевич",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=800&q=80",
    years: "1940-2015",
    position: "Заведующий лабораторией биотехнологий (1980-2005)",
    contribution: "Создатель научного направления в области молекулярной биологии. Под его руководством было разработано несколько инновационных методов генетического анализа. Его работы заложили основу для развития биотехнологического центра университета, который сегодня сотрудничает с ведущими фармацевтическими компаниями.",
    awards: ["Премия за достижения в биотехнологии (1998)", "Почетный член Европейской академии наук (2001)"],
    quote: "Биология 21 века – это синтез науки, технологии и гуманистических ценностей."
  },
  {
    id: 4,
    name: "Профессор Козлова Анна Дмитриевна",
    image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?auto=format&fit=crop&w=800&q=80",
    years: "1950-настоящее время",
    position: "Заведующая кафедрой математики (1990-2015)",
    contribution: "Разработала новые подходы к преподаванию высшей математики, создала серию учебников, используемых во многих университетах страны. Ее научные работы в области математической статистики привели к созданию новых методов анализа данных, которые нашли применение в социологии и экономике.",
    awards: ["Почетный работник высшего образования (2005)", "Медаль за вклад в развитие науки (2010)"],
    quote: "Математика учит не только решать задачи, но и правильно их формулировать."
  },
  {
    id: 5,
    name: "Академик Соколов Михаил Игоревич",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    years: "1925-2008",
    position: "Научный руководитель химического института (1970-1990)",
    contribution: "Основоположник научной школы органической химии. Под его руководством было синтезировано несколько новых классов органических соединений, имеющих важное значение для фармацевтической промышленности. Автор более 300 научных статей и 10 монографий, переведенных на многие языки мира.",
    awards: ["Государственная премия в области химии (1975)", "Золотая медаль Международного химического общества (1980)"],
    quote: "Химия – это искусство создавать новые миры на молекулярном уровне."
  },
  {
    id: 6,
    name: "Новиков Дмитрий Павлович",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    years: "1960-настоящее время",
    position: "Выпускник (1982), CEO международной технологической компании",
    contribution: "Один из самых известных выпускников университета, создатель успешной международной компании в области информационных технологий. Поддерживает тесные связи с университетом, финансирует стипендиальные программы для талантливых студентов, участвует в создании современной IT-инфраструктуры университета.",
    awards: ["Предприниматель года (2010)", "Почетный доктор университета (2015)"],
    quote: "Университет дал мне не только знания, но и видение будущего, которое я стремлюсь воплотить в жизнь."
  }
];

const People = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container py-12">
          <div className="text-center mb-16">
            <span className="inline-block text-sm uppercase tracking-wider text-primary/70">Виртуальный тур</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6">Выдающиеся личности</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Знакомьтесь с учеными, преподавателями и выпускниками, которые внесли значительный вклад в развитие университета и науки
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* People List */}
            <div className="space-y-4">
              {people.map((person) => (
                <button
                  key={person.id}
                  onClick={() => setSelectedPerson(person)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    selectedPerson.id === person.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <h3 className="font-serif text-lg font-medium">{person.name}</h3>
                  <p className={`text-sm mt-1 ${
                    selectedPerson.id === person.id ? 'text-white/80' : 'text-muted-foreground'
                  }`}>
                    {person.position}
                  </p>
                </button>
              ))}
            </div>

            {/* Selected Person Details */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-[400px]">
                <img 
                  src={selectedPerson.image} 
                  alt={selectedPerson.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <h2 className="font-serif text-3xl font-bold mb-2">{selectedPerson.name}</h2>
                    <div className="flex flex-wrap items-center gap-4 text-white/80">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{selectedPerson.years}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        <span>{selectedPerson.position}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="font-serif text-xl font-medium mb-4">Вклад и достижения</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{selectedPerson.contribution}</p>
                
                {selectedPerson.awards.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-medium flex items-center mb-2">
                      <Award className="w-4 h-4 mr-2 text-primary" />
                      Награды и признания
                    </h4>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      {selectedPerson.awards.map((award, index) => (
                        <li key={index}>{award}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-6">
                  <p className="italic text-muted-foreground">"{selectedPerson.quote}"</p>
                </div>
                
                <div className="mt-6 flex items-center space-x-4">
                  <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    Полная биография
                  </button>
                  <button className="px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    Научные работы
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

export default People;
