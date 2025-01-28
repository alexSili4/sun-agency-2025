// atb
import atb from '@/images/projects/atb.png';
import atbPrimaryBanner from '@/images/projects/atb-primary-banner.jpg';
import atbBanner1 from '@/images/projects/atb-banner-1.jpg';
import atbCashSystemIntegration from '@/images/projects/atb-cash-system-integration.png';
import atbPaymentSystemIntegration from '@/images/projects/atb-payment-system-integration.jpg';
import atbYearlyOrders from '@/images/projects/atb-yearly-orders.png';
import atbProductsCount from '@/images/projects/atb-products-count.png';
import atbActiveUsers from '@/images/projects/atb-active-users.png';
import atbStores from '@/images/projects/atb-stores.png';
import atbScreens from '@/lottiefiles/projects/atb-screens.json';
// import atbWebsite from '@/lottiefiles/projects/atb-website.json';
import atbAverageTime from '@/images/projects/atb-average-time.png';
import atbSuccessfulTransactions from '@/images/projects/atb-successful-transactions.png';
// import atbBonusActivatingCustomers from '@/images/projects/atb-bonus-activating-customers.png';
// import atbMobAppScreen1 from '@/images/projects/atb-mob-app-screen-1.png';
// import atbMobAppScreen2 from '@/images/projects/atb-mob-app-screen-2.png';
// import atbOleksandrFrolov from '@/images/projects/atb-oleksandr-frolov.jpg';
import atbDeliverySystemIntegration from '@/images/projects/atb-delivery-system-integration.png';
// import atbLoyaltySystemIntegration from '@/images/projects/atb-loyalty-system-integration.jpg';
// import atbMobAppIntegration from '@/images/projects/atb-mob-app-integration.png';
// import atbMobAppIntegrationSecondary from '@/images/projects/atb-mob-app-integration-secondary.jpg';
// other
import qanabi from '@/images/projects/qanabi.png';
import maxBanus from '@/images/projects/max-banus.png';
import evaSport from '@/images/projects/eva-sport.png';

import { Projects } from '@/types/projects.types';

const projects: Projects = [
  {
    id: 1,
    name: 'АТБ ver 3.0',
    year: 2023,
    tags: ['e-commerce'],
    img: atb,
    details: {
      mainInfo: {
        name: 'АТБ',
        tags: ['e-commerce', 'V3.0'],
        title: 'Онлайн магазин для мережі супермаркетів АТБ',
        primaryBanner: atbPrimaryBanner,
      },
      businessMetrics: [
        {
          title: 'замовлень<br/>в рік',
          img: atbYearlyOrders,
        },
        {
          title: 'товарів у<br/>каталозі',
          img: atbProductsCount,
        },
        {
          title: 'активних<br/>юзерів',
          img: atbActiveUsers,
        },
        {
          title: 'фізичних<br/>магазинів',
          img: atbStores,
        },
      ],
      generalInfo: {
        desc: "Ми розробили комплексний онлайн-магазин для мережі супермаркетів АТБ, щоб об'єднати ключові бізнес-процеси в єдину ефективну екосистему. Інтеграція з касовими системами, службами доставки та платіжними сервісами забезпечила зручність для покупців і гнучкість для подальшого масштабування. Це рішення стало важливим етапом цифрової трансформації найбільшої мережі супермаркетів України.",
        timeline: 'Триває',
        client: 'АТБ',
        websiteAddress: 'www.atbmarket.com',
      },
      banner1: atbBanner1,
      technicalTask: {
        desc: 'АТБ-Маркет — найбільша мережа супермаркетів в Україні, яка щодня обслуговує понад 4 млн покупців. У 2023 році торговий оборот мережі склав 181 млрд грн, сплачені податки — 26 млрд грн. Компанія є лідером не лише у сфері роздрібної торгівлі, а й у соціальній відповідальності, надавши під час війни допомогу на понад 2 млрд грн.<br/><br/>Нашим завданням було створити сучасний і зручний онлайн-магазин, який би інтегрувався з масштабною інфраструктурою мережі, підтримував її стрімкий розвиток та забезпечував легкий доступ до продуктів для мільйонів українців.',
        services: [
          'Проектування і консалтинг',
          'UX/UI дизайн',
          'Розробка та тестування',
          'Контент-підтримка',
          'Хостинг та технічна підтримка',
          'Консультаційна підтримка кол-центру',
        ],
        preview: atbScreens,
      },
      feature1: {
        title: 'Масштабування та інтеграція з касовою системою АТБ ',
        desc: 'Система підтримує роботу з 1400+ магазинів, забезпечуючи локалізацію та автоматичне оновлення залишків і актуальних цін для понад 25 000 товарів у каталозі. Це дозволяє покупцям бачити лише доступні продукти та планувати покупки без неприємних сюрпризів.',
        banner: atbCashSystemIntegration,
      },
      feature2: {
        title: 'Інтеграція з платіжними системами',
        desc: 'Швидкі та безпечні онлайн-оплати (EasyPay, А-Банк). Підтримка різних методів оплати: карткою, мобільними гаманцями, через термінали.',
        banner: atbPaymentSystemIntegration,
        metrics: [
          { title: 'Середній час<br/>завершення оплати', img: atbAverageTime },
          {
            title: 'успішних транзакцій<br/>без помилок',
            img: atbSuccessfulTransactions,
          },
        ],
      },
      feature3: {
        desc: 'Можливість вибору зручної служби доставки: iPost, Уклон, Glovo, Нова Пошта. Підтримка автоматичної калькуляції вартості та оптимального способу доставки враховуючи вагу замовлення.',
        title: 'Інтеграція з доставками',
        banner: atbDeliverySystemIntegration,
      },
      // --------------------------
      // lottiefiles: {
      //   website: atbWebsite,
      // },
      // mobAppIntegration: {
      //   desc: 'Синхронізація даних між вебсайтом і мобільним додатком. Синхронізація даних між вебсайтом і мобільним додатком. Синхронізація даних між вебсайтом і мобільним додатком. Синхронізація даних між вебсайтом і мобільним додатком.',
      //   banner: atbMobAppIntegration,
      //   secondaryBanner: atbMobAppIntegrationSecondary,
      // },
      // loyaltySystemIntegration: {
      //   bonusActivatingCustomers: atbBonusActivatingCustomers,
      //   banner: atbLoyaltySystemIntegration,
      // },
      // mobAppScreens: [atbMobAppScreen1, atbMobAppScreen2],
      // funFact:
      //   'Перша версія сайту була розроблена всього за 2 тижні під час пандемії',
      // clientTeam: [
      //   'Валерій Бондарь',
      //   'Олександр Фролов',
      //   'Ілля Нестеренко',
      //   'Віталій Торшин',
      //   'Наталія Забара',
      // ],
      // sunAgencyTeam: {
      //   uiUx: ['Катерина Луценко', 'Сергій Сотников'],
      //   content: ['Ксенія Пономаренко'],
      //   management: ['Сергій Василєв', 'Андрій Косолапов'],
      //   qa: ['Алла Варавіна'],
      //   developers: [
      //     'Тетяна Шумакова',
      //     'Ілля Мельничук',
      //     'Ольга Климась',
      //     'Юрій Кривенко',
      //     'Стас Шегіда',
      //     'Дмитро Антоненко',
      //     'Андрій Рожков',
      //   ],
      // },
      // reviews: [
      //   {
      //     name: 'Олександр Фролов',
      //     jobTitle: 'АТБ',
      //     avatar: atbOleksandrFrolov,
      //     text: 'Ми співпрацюємо майже 5 років і активно розбудовуємо напрямок інтернет-продажів. Все почалося із завдання запустити проєкт у критичний момент локдауну 2020 року, і Сонце успішно впорались із цим. Протягом 5 років команда виконує десятки задач щомісяця, дотримуючись строків і високих стандартів якості. Це партнерство з чітким стратегічним баченням',
      //   },
      // ],
    },
  },
  {
    id: 2,
    name: 'Qanabi',
    year: 2023,
    tags: ['e-commerce', 'брендинг'],
    img: qanabi,
    details: {
      mainInfo: {
        name: '',
        tags: [''],
        title: '',
        primaryBanner: '',
      },
      generalInfo: {
        desc: '',
        timeline: '',
        client: '',
        websiteAddress: '',
      },
      businessMetrics: [],
      banner1: '',
      technicalTask: {
        desc: '',
        services: [],
        preview: {},
      },
      feature1: {
        title: '',
        desc: '',
        banner: '',
      },
      feature2: {
        title: '',
        desc: '',
        banner: '',
      },
      feature3: {
        title: '',
        desc: '',
        banner: '',
      },
    },
  },
  {
    id: 3,
    name: 'MaxBanus',
    year: 2023,
    tags: ['e-commerce'],
    img: maxBanus,
    details: {
      mainInfo: {
        name: '',
        tags: [''],
        title: '',
        primaryBanner: '',
      },
      generalInfo: {
        desc: '',
        timeline: '',
        client: '',
        websiteAddress: '',
      },
      businessMetrics: [],
      banner1: '',
      technicalTask: {
        desc: '',
        services: [],
        preview: {},
      },
      feature1: {
        title: '',
        desc: '',
        banner: '',
      },
      feature2: {
        title: '',
        desc: '',
        banner: '',
      },
      feature3: {
        title: '',
        desc: '',
        banner: '',
      },
    },
  },
  {
    id: 4,
    name: 'EVA Sport',
    year: 2023,
    tags: ['цифровізація'],
    img: evaSport,
    details: {
      mainInfo: {
        name: '',
        tags: [''],
        title: '',
        primaryBanner: '',
      },
      generalInfo: {
        desc: '',
        timeline: '',
        client: '',
        websiteAddress: '',
      },
      businessMetrics: [],
      banner1: '',
      technicalTask: {
        desc: '',
        services: [],
        preview: {},
      },
      feature1: {
        title: '',
        desc: '',
        banner: '',
      },
      feature2: {
        title: '',
        desc: '',
        banner: '',
      },
      feature3: {
        title: '',
        desc: '',
        banner: '',
      },
    },
  },
];

export default projects;
