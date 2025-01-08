import { Services } from '@/types/services.types';
import PagePaths from './pagePaths';
import brandingAndIdentity from '@/images/services/branding-and-identity.png';
import digitalization from '@/images/services/digitalization.png';
import eCommerce from '@/images/services/e-commerce.png';
import webDevelopment from '@/images/services/web-development.png';

const services: Services = [
  {
    title: 'Комплексний e-commerce',
    tags: ['Корпоративні сайти', 'Пропо сайти', 'Сервісні сайти'],
    path: PagePaths.eCommerce,
    icon: eCommerce,
  },
  {
    title: 'Розробка сайтів',
    tags: ['Корпоративні сайти', 'Пропо сайти', 'Сервісні сайти'],
    path: PagePaths.webDevelopment,
    icon: webDevelopment,
  },
  {
    title: 'Брендинг та айдентика',
    tags: ['Корпоративні сайти', 'Пропо сайти', 'Сервісні сайти'],
    path: PagePaths.brandingAndIdentity,
    icon: brandingAndIdentity,
  },
  {
    title: 'Цифровізація',
    tags: ['Корпоративні сайти', 'Пропо сайти', 'Сервісні сайти'],
    path: PagePaths.digitalization,
    icon: digitalization,
  },
];

export default services;
