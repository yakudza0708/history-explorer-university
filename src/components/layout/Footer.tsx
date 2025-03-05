
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold">Университет</h3>
            <p className="text-muted-foreground">
              Виртуальный тур по богатой истории нашего университета, с момента основания до наших дней.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Главная</Link></li>
              <li><Link to="/landmarks" className="text-muted-foreground hover:text-primary transition-colors">Достопримечательности</Link></li>
              <li><Link to="/people" className="text-muted-foreground hover:text-primary transition-colors">Выдающиеся личности</Link></li>
              <li><Link to="/media-archive" className="text-muted-foreground hover:text-primary transition-colors">Медиа архив</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-2 mt-0.5" />
                <span className="text-muted-foreground">Университетский проспект, 1, Москва, Россия</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-2" />
                <span className="text-muted-foreground">info@university.edu</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-2" />
                <span className="text-muted-foreground">+7 (123) 456-7890</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Виртуальный тур по истории университета. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
