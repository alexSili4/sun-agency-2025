import { IContacts } from '@/types/contacts.types';

const contacts: IContacts = {
  info: {
    email: 'hello@sun.agency',
    phone: [
      {
        number: '+38 068 357 8733',
        tg: 'https://t.me/Sun_agency',
        isViber: true,
      },
      { number: '+38 044 386 9400' },
    ],
    address: {
      text: 'вул. Верхній Вал, 28/12, Київ. Україна',
      link: 'https://maps.app.goo.gl/kZ7ucFYEJNQmxGt86',
    },
  },
  services: [
    { label: 'Електронна комерція', value: 'e-commerce' },
    { label: 'Веб-розробка', value: 'web-dev' },
    { label: 'iOS та Android додатки', value: 'applications' },
    { label: 'Брендинг та айдентика', value: 'branding-and-identity' },
    { label: 'Цифровізація', value: 'digitalization' },
    { label: 'Інше', value: 'other' },
  ],
};

export default contacts;
