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
import coin1 from '@/images/about/system/coin-1.png';
import coin2 from '@/images/about/system/coin-2.png';
import coin3 from '@/images/about/system/coin-3.png';
import coin4 from '@/images/about/system/coin-4.png';
import coin5 from '@/images/about/system/coin-5.png';
import coin6 from '@/images/about/system/coin-6.png';

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
        paddingBottomMob: 50,
        paddingLeftMob: 30,
        paddingBottomDesk: 185,
        paddingRightDesk: 154,
        bottomDesk: -5,
        rightDesk: -5,
        bottomMob: -5,
        leftMob: -5,
        leaderLine: {
          imgDesk: leaderLine1,
          imgMob: leaderLine5,
          topMob: 25,
          rightMob: 170,
          topDesk: 45,
          leftDesk: 194,
          widthDesk: 139,
          heightDesk: 170,
          widthMob: 30,
          heightMob: 48,
        },
      },
    },
    img: {
      img: coin1,
      topMob: 95,
      leftMob: 180,
      topDesk: 263,
      leftDesk: 495,
      sizeMob: 33,
      sizeDesk: 90,
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
        paddingBottomMob: 100,
        paddingLeftMob: 72,
        paddingBottomDesk: 234,
        paddingRightDesk: 207,
        paddingLeftDesk: 24,
        bottomMob: -5,
        leftMob: -5,
        bottomDesk: -5,
        rightDesk: -5,
        leaderLine: {
          imgDesk: leaderLine2,
          imgMob: leaderLine5,
          topMob: 25,
          rightMob: 200,
          topDesk: 45,
          leftDesk: 210,
          widthDesk: 194,
          heightDesk: 232,
          widthMob: 60,
          heightMob: 96,
        },
      },
    },
    img: {
      img: coin2,
      bottomMob: 93,
      leftMob: 103,
      bottomDesk: 255,
      leftDesk: 284,
      sizeMob: 36,
      sizeDesk: 100,
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
        paddingBottomMob: 90,
        paddingLeftMob: 60,
        paddingTopDesk: 5,
        paddingBottomDesk: 217,
        paddingRightDesk: 71,
        paddingLeftDesk: 162,
        bottomMob: -5,
        leftMob: -5,
        bottomDesk: -6,
        rightDesk: -59,
        leaderLine: {
          imgDesk: leaderLine3,
          imgMob: leaderLine6,
          topMob: 20,
          rightMob: 140,
          topDesk: 45,
          leftDesk: 210,
          widthDesk: 125,
          heightDesk: 218,
          widthMob: 75,
          heightMob: 113,
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
        paddingTopMob: 50,
        paddingLeftMob: 90,
        paddingTopDesk: 13,
        paddingRightDesk: 122,
        topDesk: -38,
        rightDesk: -63,
        topMob: -5,
        leftMob: -5,
        leaderLine: {
          imgDesk: leaderLine4,
          imgMob: leaderLine7,
          topMob: 25,
          rightMob: 195,
          leftDesk: 238,
          bottomDesk: 37,
          widthDesk: 41,
          heightDesk: 8,
          widthMob: 95,
          heightMob: 143,
        },
      },
    },
    img: {
      img: coin3,
      bottomMob: 31,
      leftMob: 139,
      bottomDesk: 85,
      leftDesk: 382,
      sizeMob: 40,
      sizeDesk: 110,
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
        paddingBottomMob: 50,
        paddingRightMob: 50,
        paddingBottomDesk: 161,
        paddingLeftDesk: 106,
        leftDesk: -5,
        bottomDesk: -5,
        rightMob: -5,
        bottomMob: -5,
        leaderLine: {
          imgDesk: leaderLine5,
          imgMob: leaderLine1,
          topMob: 25,
          leftMob: 155,
          topDesk: 39,
          rightDesk: 179,
          widthDesk: 84,
          heightDesk: 134,
          widthMob: 60,
          heightMob: 74,
        },
      },
    },
    img: {
      img: coin4,
      topMob: 108,
      rightMob: 161,
      topDesk: 299,
      rightDesk: 444,
      sizeMob: 35,
      sizeDesk: 95,
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
        paddingBottomMob: 100,
        paddingRightMob: 70,
        paddingBottomDesk: 193,
        paddingLeftDesk: 132,
        leftDesk: -5,
        bottomDesk: -5,
        bottomMob: -5,
        rightMob: -5,
        leaderLine: {
          imgDesk: leaderLine6,
          imgMob: leaderLine1,
          topMob: 25,
          leftMob: 160,
          topDesk: 79,
          rightDesk: 218,
          widthDesk: 130,
          heightDesk: 196,
          widthMob: 115,
          heightMob: 140,
        },
      },
    },
    img: {
      img: coin5,
      bottomMob: 56,
      rightMob: 124,
      bottomDesk: 155,
      rightDesk: 342,
      sizeMob: 36,
      sizeDesk: 100,
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
        paddingTopMob: 15,
        paddingRightMob: 50,
        paddingTopDesk: 27,
        paddingLeftDesk: 78,
        topDesk: -5,
        leftDesk: -5,
        topMob: -5,
        rightMob: -5,
        leaderLine: {
          imgDesk: leaderLine7,
          imgMob: leaderLine4,
          topMob: 15,
          leftMob: 110,
          bottomDesk: 71,
          rightDesk: 169,
          widthDesk: 44,
          heightDesk: 18,
          widthMob: 80,
          heightMob: 19,
        },
      },
    },
    img: {
      img: coin6,
      bottomMob: 16,
      rightMob: 166,
      bottomDesk: 45,
      rightDesk: 459,
      sizeMob: 40,
      sizeDesk: 110,
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
