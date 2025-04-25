import { Statistics } from '@/types/statistics.types';
import Symbols from './symbols';

const statistics: Statistics = [
  {
    number: '14',
    title: 'років досвіду',
    isBaseItem: false,
  },
  {
    number: '70+',
    title: `Успішних${Symbols.textWrap}e-commerce`,
    isBaseItem: false,
  },
  {
    number: '150+',
    title: `задоволених${Symbols.textWrap}клієнтів`,
    isBaseItem: true,
  },
];

export default statistics;
