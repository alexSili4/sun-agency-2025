import { IContacts } from '@/types/contacts.types';

const contacts: IContacts = {
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
};

export default contacts;
