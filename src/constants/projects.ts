// atb
import atbDesk from '@/images/projects/atb/atb-desk.png';
import atbMob from '@/images/projects/atb/atb-mob.png';
import atbPrimaryBannerDesk from '@/images/projects/atb/atb-primary-banner-desk.jpg';
import atbPrimaryBannerMobile from '@/images/projects/atb/atb-primary-banner-mobile.png';
import atbBanner1Desk from '@/images/projects/atb/atb-banner-1-desk.jpg';
import atbBanner1Mobile from '@/images/projects/atb/atb-banner-1-mob.jpg';
import atbCashSystemIntegrationDesk from '@/images/projects/atb/atb-cash-system-integration-desk.png';
import atbCashSystemIntegrationMobile from '@/images/projects/atb/atb-cash-system-integration-mobile.png';
import atbPaymentSystemIntegrationDesk from '@/images/projects/atb/atb-payment-system-integration-desk.jpg';
import atbPaymentSystemIntegrationMobile from '@/images/projects/atb/atb-payment-system-integration-mobile.jpg';
import atbScreens from '@/lottiefiles/projects/atb-screens.json';
import atbWebsite from '@/lottiefiles/projects/atb-website.json';
import atbDeliverySystemIntegrationDesk from '@/images/projects/atb/atb-delivery-system-integration-desk.png';
import atbDeliverySystemIntegrationMobile from '@/images/projects/atb/atb-delivery-system-integration-mobile.png';
import atbLoyaltySystemIntegrationDesk from '@/images/projects/atb/atb-loyalty-system-integration-desk.jpg';
import atbLoyaltySystemIntegrationMobile from '@/images/projects/atb/atb-loyalty-system-integration-mobile.jpg';
import atbMobAppIntegrationDesk from '@/images/projects/atb/atb-mob-app-integration-desk.png';
import atbMobAppIntegrationMobile from '@/images/projects/atb/atb-mob-app-integration-mobile.png';
import atbMobAppIntegrationAdditionalDesk from '@/images/projects/atb/atb-mob-app-integration-additional-desk.jpg';
import atbMobAppIntegrationAdditionalMobile from '@/images/projects/atb/atb-mob-app-integration-additional-mobile.jpg';
import atbOleksandrFrolov from '@/images/projects/atb/atb-oleksandr-frolov.jpg';
// other
import qanabiDesk from '@/images/projects/qanabi/qanabi-desk.png';
import qanabiMob from '@/images/projects/qanabi/qanabi-mob.png';
import maxBanusDesk from '@/images/projects/max-banus/max-banus-desk.png';
import maxBanusMob from '@/images/projects/max-banus/max-banus-mob.png';
import evaSportMob from '@/images/projects/eva-sport/eva-sport-mob.png';
import evaSportDesk from '@/images/projects/eva-sport/eva-sport-desk.png';
import { Projects } from '@/types/projects.types';

const projects: Projects = [
  {
    id: 1,
    name: 'АТБ ver 3.0',
    year: 2023,
    tags: ['e-commerce'],
    img: { desk: atbDesk, mob: atbMob },
    details: {
      mainInfo: {
        name: 'АТБ',
        tags: ['e-commerce', 'V3.0'],
        title: 'Онлайн магазин для мережі супермаркетів АТБ',
        primaryBanner: {
          mobile: atbPrimaryBannerMobile,
          desk: atbPrimaryBannerDesk,
        },
      },
      businessMetrics: [
        {
          title: 'замовлень<br/>в рік',
          number: '10млн',
        },
        {
          title: 'товарів у<br/>каталозі',
          number: '25 000 +',
        },
        {
          title: 'активних<br/>юзерів',
          number: '2млн +',
        },
        {
          title: 'фізичних<br/>магазинів',
          number: '25 000 +',
        },
      ],
      generalInfo: {
        desc: "Ми розробили комплексний онлайн-магазин для мережі супермаркетів АТБ, щоб об'єднати ключові бізнес-процеси в єдину ефективну екосистему. Інтеграція з касовими системами, службами доставки та платіжними сервісами забезпечила зручність для покупців і гнучкість для подальшого масштабування. Це рішення стало важливим етапом цифрової трансформації найбільшої мережі супермаркетів України.",
        timeline: 'Триває',
        client: 'АТБ',
        websiteAddress: 'www.atbmarket.com',
      },
      banner1: { desk: atbBanner1Desk, mobile: atbBanner1Mobile },
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
        banner: {
          mobile: atbCashSystemIntegrationMobile,
          desk: atbCashSystemIntegrationDesk,
        },
      },
      feature2: {
        title: 'Інтеграція з платіжними системами',
        desc: 'Швидкі та безпечні онлайн-оплати (EasyPay, А-Банк). Підтримка різних методів оплати: карткою, мобільними гаманцями, через термінали.',
        banner: {
          mobile: atbPaymentSystemIntegrationMobile,
          desk: atbPaymentSystemIntegrationDesk,
        },
        metrics: [
          { title: 'Середній час завершення оплати', number: '20 с' },
          {
            title: 'успішних транзакцій без помилок',
            number: '98%',
          },
        ],
      },
      feature3: {
        desc: 'Можливість вибору зручної служби доставки: iPost, Уклон, Glovo, Нова Пошта. Підтримка автоматичної калькуляції вартості та оптимального способу доставки враховуючи вагу замовлення.',
        title: 'Інтеграція з доставками',
        banner: {
          mobile: atbDeliverySystemIntegrationMobile,
          desk: atbDeliverySystemIntegrationDesk,
        },
      },
      feature4: {
        title: 'Інтеграція з системою лояльності та кобрендовими картками АТБ',
        desc: 'Покупці можуть використовувати бонуси та унікальні знижки під час оформлення замовлення. Інтеграція підтримує кобрендові картки, забезпечуючи персоналізований підхід до кожного клієнта.',
        banner: {
          desk: atbLoyaltySystemIntegrationDesk,
          mobile: atbLoyaltySystemIntegrationMobile,
        },
        metrics: [
          {
            title: 'клієнтів активували бонуси при онлайн-замовленнях',
            number: '53%',
          },
        ],
      },
      feature5: {
        title: 'Інтеграція з мобільним додатком',
        desc: 'Синхронізація даних між вебсайтом і мобільним додатком. Синхронізація даних між вебсайтом і мобільним додатком. Синхронізація даних між вебсайтом і мобільним додатком. Синхронізація даних між вебсайтом і мобільним додатком.',
        banner: {
          desk: atbMobAppIntegrationDesk,
          mobile: atbMobAppIntegrationMobile,
        },
        additionalBanner: {
          desk: atbMobAppIntegrationAdditionalDesk,
          mobile: atbMobAppIntegrationAdditionalMobile,
        },
      },
      funFact:
        'Перша версія сайту була розроблена всього за 2 тижні під час пандемії',
      teams: {
        client: {
          title: 'Команда АТБ',
          team: [
            'Валерій Бондарь',
            'Олександр Фролов',
            'Ілля Нестеренко',
            'Віталій Торшин',
            'Наталія Забара',
          ],
        },
        sunAgency: {
          title: 'Команда Сонця',
          team: {
            uiUx: {
              title: 'Дизайн',
              team: ['Катерина Луценко', 'Сергій Сотников'],
            },
            content: {
              title: 'Контент',
              team: ['Ксенія Пономаренко'],
            },
            management: {
              title: 'Менеджмент',
              team: ['Сергій Василєв', 'Андрій Косолапов'],
            },
            qa: {
              title: 'QA',
              team: ['Алла Варавіна'],
            },
            developers: {
              title: 'Розробка',
              team: [
                'Тетяна Шумакова',
                'Ілля Мельничук',
                'Ольга Климась',
                'Юрій Кривенко',
                'Стас Шегіда',
                'Дмитро Антоненко',
                'Андрій Рожков',
              ],
            },
          },
        },
      },
      websitePreview: atbWebsite,
      reviews: [
        {
          name: 'Олександр Фролов',
          jobTitle: 'АТБ',
          avatar: atbOleksandrFrolov,
          text: 'Ми співпрацюємо майже 5 років і активно розбудовуємо напрямок інтернет-продажів. Все почалося із завдання запустити проєкт у критичний момент локдауну 2020 року, і Сонце успішно впорались із цим. Протягом 5 років команда виконує десятки задач щомісяця, дотримуючись строків і високих стандартів якості. Це партнерство з чітким стратегічним баченням',
        },
      ],
    },
  },
  {
    id: 2,
    name: 'Qanabi',
    year: 2023,
    tags: ['e-commerce', 'брендинг'],
    img: { desk: qanabiDesk, mob: qanabiMob },
    details: {
      mainInfo: {
        name: '',
        tags: [''],
        title: '',
        primaryBanner: { desk: '', mobile: '' },
      },
      generalInfo: {
        desc: '',
        timeline: '',
        client: '',
        websiteAddress: '',
      },
      businessMetrics: [],
      banner1: { mobile: '', desk: '' },
      technicalTask: {
        desc: '',
        services: [],
        preview: {},
      },
      feature1: {
        title: '',
        desc: '',
        banner: { mobile: '', desk: '' },
      },
      feature2: {
        title: '',
        desc: '',
        banner: { mobile: '', desk: '' },
      },
      feature3: {
        title: '',
        desc: '',
        banner: { mobile: '', desk: '' },
      },
      feature4: {
        title: '',
        desc: '',
        banner: { mobile: '', desk: '' },
      },
      feature5: {
        title: '',
        desc: '',
        banner: { mobile: '', desk: '' },
      },
      funFact: '',
      teams: {
        client: {
          title: '',
          team: [],
        },
        sunAgency: {
          title: '',
          team: {
            uiUx: {
              title: '',
              team: [],
            },
            content: {
              title: '',
              team: [],
            },
            management: {
              title: '',
              team: [],
            },
            qa: {
              title: '',
              team: [],
            },
            developers: {
              title: '',
              team: [],
            },
          },
        },
      },
      websitePreview: {},
      reviews: [],
    },
  },
  {
    id: 3,
    name: 'MaxBanus',
    year: 2023,
    tags: ['e-commerce'],
    img: { desk: maxBanusDesk, mob: maxBanusMob },
    details: {
      mainInfo: {
        name: '',
        tags: [''],
        title: '',
        primaryBanner: { desk: '', mobile: '' },
      },
      generalInfo: {
        desc: '',
        timeline: '',
        client: '',
        websiteAddress: '',
      },
      businessMetrics: [],
      banner1: { mobile: '', desk: '' },
      technicalTask: {
        desc: '',
        services: [],
        preview: {},
      },
      feature1: {
        title: '',
        desc: '',
        banner: { mobile: '', desk: '' },
      },
      feature2: {
        title: '',
        desc: '',
        banner: { mobile: '', desk: '' },
      },
      feature3: {
        title: '',
        desc: '',
        banner: { mobile: '', desk: '' },
      },
      feature4: {
        title: '',
        desc: '',
        banner: { mobile: '', desk: '' },
      },
      feature5: {
        title: '',
        desc: '',
        banner: { mobile: '', desk: '' },
      },
      funFact: '',
      teams: {
        client: {
          title: '',
          team: [],
        },
        sunAgency: {
          title: '',
          team: {
            uiUx: {
              title: '',
              team: [],
            },
            content: {
              title: '',
              team: [],
            },
            management: {
              title: '',
              team: [],
            },
            qa: {
              title: '',
              team: [],
            },
            developers: {
              title: '',
              team: [],
            },
          },
        },
      },
      websitePreview: {},
      reviews: [],
    },
  },
  {
    id: 4,
    name: 'EVA Sport',
    year: 2023,
    tags: ['цифровізація'],
    img: { desk: evaSportDesk, mob: evaSportMob },
    details: {
      mainInfo: {
        name: '',
        tags: [''],
        title: '',
        primaryBanner: { desk: '', mobile: '' },
      },
      generalInfo: {
        desc: '',
        timeline: '',
        client: '',
        websiteAddress: '',
      },
      businessMetrics: [],
      banner1: { mobile: '', desk: '' },
      technicalTask: {
        desc: '',
        services: [],
        preview: {},
      },
      feature1: {
        title: '',
        desc: '',
        banner: { mobile: '', desk: '' },
      },
      feature2: {
        title: '',
        desc: '',
        banner: { mobile: '', desk: '' },
      },
      feature3: {
        title: '',
        desc: '',
        banner: { mobile: '', desk: '' },
      },
      feature4: {
        title: '',
        desc: '',
        banner: { mobile: '', desk: '' },
      },
      feature5: {
        title: '',
        desc: '',
        banner: { mobile: '', desk: '' },
      },
      funFact: '',
      teams: {
        client: {
          title: '',
          team: [],
        },
        sunAgency: {
          title: '',
          team: {
            uiUx: {
              title: '',
              team: [],
            },
            content: {
              title: '',
              team: [],
            },
            management: {
              title: '',
              team: [],
            },
            qa: {
              title: '',
              team: [],
            },
            developers: {
              title: '',
              team: [],
            },
          },
        },
      },
      websitePreview: {},
      reviews: [],
    },
  },
];

export default projects;
