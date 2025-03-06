import { Employees, Metrics, IAbout } from '@/types/about.types';

const metrics: Metrics = [
  {
    name: 'На ринку',
    number: '14+ років',
  },
  {
    name: 'Експертиза',
    number: 'Рітейл',
  },
  {
    name: 'Досвід',
    number: '200+ проектів',
  },
];

const employees: Employees = [
  { name: 'Андрій Косолапов', jobTitle: 'CEO', avatar: '' },
  { name: 'Сергій Сотніков', jobTitle: 'Art Director', avatar: '' },
  { name: "Сергій Васіл'єв", jobTitle: 'Project Manager', avatar: '' },
  { name: 'Георгій Косолапов', jobTitle: 'Project Manager', avatar: '' },
  { name: 'Андрій Рожков', jobTitle: 'Back-end Developer', avatar: '' },
  { name: 'Юрій Кривенко', jobTitle: 'Back-end Developer', avatar: '' },
  { name: 'Катерина Луценко', jobTitle: 'Designer', avatar: '' },
  { name: 'Тетяна Шумакова', jobTitle: 'Front-end Developer', avatar: '' },
  { name: 'Front-end Developer', jobTitle: 'Front-end Developer', avatar: '' },
];

const about: IAbout = {
  metrics,
  employees,
};

export default about;
