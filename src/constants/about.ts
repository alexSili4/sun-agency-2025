import { Employees, Metrics, IAbout, Principles } from '@/types/about.types';
import socialResponsibility from '@/images/about/principles/social-responsibility.png';
import ethics from '@/images/about/principles/ethics.png';
import realBenefit from '@/images/about/principles/real-benefit.png';
import partnership from '@/images/about/principles/partnership.png';
import brandBoost from '@/images/about/principles/brand-boost.png';
import lifesSource from '@/images/about/principles/lifes-source.png';

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

const principles: Principles = [
  {
    title: 'Сонце — джерело життя',
    text: 'Сонце — джерело ясності та надійності. Як воно дає життя, ми надихаємо нове у ваш проєкт чи бренд.',
    img: {
      img: lifesSource,
      topDesk: -95,
      leftDesk: -280,
    },
    marker: {
      topDesk: 174,
      leftDesk: 22,
    },
  },
  {
    title: 'Підсилення бренду',
    text: 'А ще Сонце надає сили. Ми ж висвітлюємо переваги вашого бренду так, щоб вони стали очевидними для кожного споживача.',
    img: {
      img: brandBoost,
      topDesk: 144,
      leftDesk: -196,
    },
    marker: {
      topDesk: 82,
      leftDesk: 47,
    },
  },
  {
    title: 'Партнерство',
    text: 'Ми працюємо з тими, хто приймає рішення, хто вірить у свій бізнес і готовий інвестувати ресурси та довіряти нам вирішення складних завдань. Ми цінуємо обґрунтований скептицизм на етапі планування та довіру після ухвалення рішення.',
    img: {
      img: partnership,
      topDesk: 239,
      leftDesk: -443,
    },
    marker: {
      topDesk: 44,
      leftDesk: 191,
    },
  },
  {
    title: 'Реальна користь',
    text: 'Ми не займаємось «освоєнням бюджетів» і уникаємо поверхневих рішень. Ми робимо тільки те, що дійсно вирішує проблеми наших клієнтів та покращує життя їхнім споживачам. Те, що дійсно приносить користь.',
    img: {
      img: realBenefit,
      topDesk: -9,
      leftDesk: 426,
    },
    marker: {
      topDesk: 70,
      leftDesk: 57,
    },
  },
  {
    title: 'Етичність',
    text: 'Ми не платимо «відкати» й не співпрацюємо зі шкідливими чи неетичними продуктами. Чесність та етичність — наші основні орієнтири.',
    img: {
      img: ethics,
      topDesk: 241,
      leftDesk: 429,
    },
    marker: {
      topDesk: 68,
      leftDesk: 200,
    },
  },
  {
    title: 'Соціальна відповідальність',
    text: 'Ми підтримуємо армію, сили оборони та волонтерські ініціативи, допомагаючи у спільній боротьбі за майбутнє.',
    img: {
      img: socialResponsibility,
      topDesk: 344,
      leftDesk: 654,
    },
    marker: {
      topDesk: 28,
      leftDesk: 121,
    },
  },
];

const about: IAbout = {
  metrics,
  employees,
  principles,
};

export default about;
