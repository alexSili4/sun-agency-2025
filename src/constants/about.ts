import {
  Employees,
  Metrics,
  IAbout,
  Principles,
  System,
} from '@/types/about.types';
import socialResponsibility from '@/images/about/principles/social-responsibility.png';
import ethics from '@/images/about/principles/ethics.png';
import realBenefit from '@/images/about/principles/real-benefit.png';
import partnership from '@/images/about/principles/partnership.png';
import brandBoost from '@/images/about/principles/brand-boost.png';
import lifesSource from '@/images/about/principles/lifes-source.png';
import leaderLine1 from '@/icons/about/system/leader-line-1.svg';
import leaderLine2 from '@/icons/about/system/leader-line-2.svg';
import leaderLine3 from '@/icons/about/system/leader-line-3.svg';
import leaderLine4 from '@/icons/about/system/leader-line-4.svg';
import leaderLine5 from '@/icons/about/system/leader-line-5.svg';
import leaderLine6 from '@/icons/about/system/leader-line-6.svg';
import leaderLine7 from '@/icons/about/system/leader-line-7.svg';

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

const system: System = [
  {
    point: {
      topMob: 116,
      leftMob: 220,
      topDesk: 321,
      leftDesk: 607,
      desc: {
        text: 'Швидкість і оптимізація',
        paddingTopMob: 50,
        paddingLeftMob: 50,
        paddingBottomDesk: 185,
        paddingRightDesk: 154,
        bottomDesk: -5,
        rightDesk: -5,
        topMob: -5,
        leftMob: -5,
        leaderLine: {
          imgDesk: leaderLine1,
          // topMob:,
          // leftMob:,
          // bottomMob:,
          topDesk: 45,
          leftDesk: 194,
          widthDesk: 139,
          heightDesk: 170,
        },
      },
    },
  },
  {
    point: {
      topMob: 161,
      leftMob: 186,
      topDesk: 445,
      leftDesk: 513,
      desc: {
        text: 'Дослідження та стратегія',
        paddingTopMob: 100,
        paddingLeftMob: 100,
        paddingBottomDesk: 234,
        paddingRightDesk: 207,
        paddingLeftDesk: 24,
        topMob: -5,
        leftMob: -5,
        bottomDesk: -5,
        rightDesk: -5,
        leaderLine: {
          imgDesk: leaderLine2,
          // topMob:,
          // leftMob:,
          // bottomMob:,
          // rightMob:,
          topDesk: 45,
          leftDesk: 210,
          widthDesk: 194,
          heightDesk: 232,
        },
      },
    },
  },
  {
    point: {
      topMob: 157,
      leftMob: 153,
      topDesk: 432,
      leftDesk: 422,
      desc: {
        text: 'Розумна інвестиція',
        paddingTopMob: 100,
        paddingLeftMob: 100,
        paddingTopDesk: 5,
        paddingBottomDesk: 217,
        paddingRightDesk: 71,
        paddingLeftDesk: 162,
        topMob: -5,
        leftMob: -5,
        bottomDesk: -6,
        rightDesk: -59,
        leaderLine: {
          imgDesk: leaderLine3,
          // topMob:,
          // leftMob:,
          // bottomMob:,
          // rightMob:,
          topDesk: 45,
          leftDesk: 210,
          widthDesk: 125,
          heightDesk: 218,
        },
      },
    },
  },
  {
    point: {
      topMob: 191,
      leftMob: 132,
      topDesk: 527,
      leftDesk: 364,
      desc: {
        text: 'Супровід і технічна підтримка',
        paddingTopMob: 100,
        paddingLeftMob: 100,
        paddingTopDesk: 13,
        paddingRightDesk: 122,
        topDesk: -38,
        rightDesk: -63,
        topMob: -38,
        leftMob: -63,
        leaderLine: {
          imgDesk: leaderLine4,
          // topMob:,
          // leftMob:,
          // bottomMob:,
          // rightMob:,
          leftDesk: 238,
          bottomDesk: 37,
          widthDesk: 41,
          heightDesk: 8,
        },
      },
    },
  },
  {
    point: {
      topMob: 127,
      leftMob: 335,
      topDesk: 349,
      leftDesk: 925,
      desc: {
        text: 'Фокус на бізнес-цілі',
        paddingTopMob: 50,
        paddingBottomMob: 0,
        paddingRightMob: 50,
        paddingLeftMob: 0,
        paddingTopDesk: 0,
        paddingBottomDesk: 161,
        paddingRightDesk: 0,
        paddingLeftDesk: 106,
        leftDesk: -5,
        bottomDesk: -5,
        rightMob: -5,
        topMob: -5,
        leaderLine: {
          imgDesk: leaderLine5,
          // topMob:,
          // leftMob:,
          // bottomMob:,
          // rightMob:,
          topDesk: 39,
          rightDesk: 179,
          widthDesk: 84,
          heightDesk: 134,
        },
      },
    },
  },
  {
    point: {
      topMob: 184,
      leftMob: 372,
      topDesk: 507,
      leftDesk: 1027,
      desc: {
        text: 'Розвиток із перших кроків',
        paddingTopMob: 50,
        paddingRightMob: 50,
        paddingBottomDesk: 193,
        paddingLeftDesk: 132,
        leftDesk: -5,
        bottomDesk: -5,
        topMob: -5,
        rightMob: -5,
        leaderLine: {
          imgDesk: leaderLine6,
          // topMob:,
          // leftMob:,
          // bottomMob:,
          // rightMob:,
          topDesk: 21,
          rightDesk: 194,
          widthDesk: 130,
          heightDesk: 196,
        },
      },
    },
  },
  {
    point: {
      topMob: 217,
      leftMob: 393,
      topDesk: 598,
      leftDesk: 1084,
      desc: {
        text: 'Прозорість роботи',
        paddingTopMob: 50,
        paddingRightMob: 50,
        paddingTopDesk: 27,
        paddingLeftDesk: 78,
        topDesk: -5,
        leftDesk: -5,
        topMob: -5,
        rightMob: -5,
        leaderLine: {
          imgDesk: leaderLine7,
          // topMob:,
          // leftMob:,
          // bottomMob:,
          // rightMob:,
          bottomDesk: 71,
          rightDesk: 169,
          widthDesk: 44,
          heightDesk: 18,
        },
      },
    },
  },
];

const about: IAbout = {
  metrics,
  employees,
  principles,
  system,
};

export default about;
