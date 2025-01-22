// atb
import atb from '@/images/projects/atb.png';
import atbPrimaryBanner from '@/images/projects/atb-primary-banner.jpg';
import atbSecondaryBanner from '@/images/projects/atb-secondary-banner.jpg';
import atbThirdBanner from '@/images/projects/atb-third-banner.png';
import atbYearlyOrders from '@/images/projects/atb-yearly-orders.png';
import atbProductsCount from '@/images/projects/atb-products-count.png';
import atbActiveUsers from '@/images/projects/atb-active-users.png';
import atbStores from '@/images/projects/atb-stores.png';
import atbScreens from '@/lottiefiles/projects/atb-screens.json';
import atbAverageTime from '@/images/projects/atb-average-time.png';
import atbSuccessfulTransactions from '@/images/projects/atb-successful-transactions.png';
// other
import qanabi from '@/images/projects/qanabi.png';
import maxBanus from '@/images/projects/max-banus.png';
import evaSport from '@/images/projects/eva-sport.png';

import { Projects } from '@/types/projects.types';
import Symbols from './symbols';

const projects: Projects = [
  {
    id: 1,
    name: 'АТБ ver 3.0',
    year: 2023,
    tags: ['e-commerce'],
    img: atb,
    details: {
      name: 'АТБ',
      tags: ['e-commerce', 'V3.0'],
      title: 'Онлайн магазин для мережі супермаркетів АТБ',
      primaryBanner: atbPrimaryBanner,
      secondaryBanner: atbSecondaryBanner,
      thirdBanner: atbThirdBanner,
      desc: "Ми розробили комплексний онлайн-магазин для мережі супермаркетів АТБ, щоб об'єднати ключові бізнес-процеси в єдину ефективну екосистему. Інтеграція з касовими системами, службами доставки та платіжними сервісами забезпечила зручність для покупців і гнучкість для подальшого масштабування. Це рішення стало важливим етапом цифрової трансформації найбільшої мережі супермаркетів України.",
      generalInfo: {
        timeline: 'Триває',
        client: 'АТБ',
        websiteAddress: 'www.atbmarket.com',
      },
      businessMetrics: {
        yearlyOrders: atbYearlyOrders,
        productsCount: atbProductsCount,
        activeUsers: atbActiveUsers,
        stores: atbStores,
      },
      technicalTask: `АТБ-Маркет — найбільша мережа супермаркетів в Україні, яка щодня обслуговує понад 4 млн покупців. У 2023 році торговий оборот мережі склав 181 млрд грн, сплачені податки — 26 млрд грн. Компанія є лідером не лише у сфері роздрібної торгівлі, а й у соціальній відповідальності, надавши під час війни допомогу на понад 2 млрд грн.${Symbols.lineSpacing}Нашим завданням було створити сучасний і зручний онлайн-магазин, який би інтегрувався з масштабною інфраструктурою мережі, підтримував її стрімкий розвиток та забезпечував легкий доступ до продуктів для мільйонів українців.`,
    },
    services: [
      'Проектування і консалтинг',
      'UX/UI дизайн',
      'Розробка та тестування',
      'Контент-підтримка',
      'Хостинг та технічна підтримка',
      'Консультаційна підтримка кол-центру',
    ],
    lottiefiles: {
      screens: atbScreens,
    },
    cashSystemIntegration:
      'Система підтримує роботу з 1400+ магазинів, забезпечуючи локалізацію та автоматичне оновлення залишків і актуальних цін для понад 25 000 товарів у каталозі. Це дозволяє покупцям бачити лише доступні продукти та планувати покупки без неприємних сюрпризів.',
    paymentSystemIntegration: {
      desc: 'Швидкі та безпечні онлайн-оплати (EasyPay, А-Банк). Підтримка різних методів оплати: карткою, мобільними гаманцями, через термінали.',
      averageTime: atbAverageTime,
      successfulTransactions: atbSuccessfulTransactions,
    },
  },
  {
    id: 2,
    name: 'Qanabi',
    year: 2023,
    tags: ['e-commerce', 'брендинг'],
    img: qanabi,
  },
  { id: 3, name: 'MaxBanus', year: 2023, tags: ['e-commerce'], img: maxBanus },
  {
    id: 4,
    name: 'EVA Sport',
    year: 2023,
    tags: ['цифровізація'],
    img: evaSport,
  },
];

export default projects;
