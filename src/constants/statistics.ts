import { Statistics } from '@/types/statistics.types';
import number150 from '@/images/main/hero/150.png';
import number70 from '@/images/main/hero/70.png';
import number14 from '@/images/main/hero/14.png';
import Symbols from './symbols';

const statistics: Statistics = [
  {
    number: '14',
    title: 'років досвіду',
    img: number14,
    height: 81,
    width: 79,
    isBaseItem: false,
  },
  {
    number: '70+',
    title: `Успішних${Symbols.textWrap}e-commerce`,
    img: number70,
    height: 81,
    width: 121,
    isBaseItem: false,
  },
  {
    number: '150+',
    title: `задоволених${Symbols.textWrap}клієнтів`,
    img: number150,
    height: 81,
    width: 160,
    isBaseItem: true,
  },
];

export default statistics;
