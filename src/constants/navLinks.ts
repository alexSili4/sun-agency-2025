import { NavLinks } from '@/types/navLinks';
import PagePaths from './pagePaths';

const navLinks: NavLinks = [
  { title: 'Кейси', path: PagePaths.projects },
  { title: 'Клієнти', path: PagePaths.clients },
  { title: 'Про нас', path: PagePaths.about },
  { title: 'Контакти', path: PagePaths.contacts },
];

export default navLinks;
