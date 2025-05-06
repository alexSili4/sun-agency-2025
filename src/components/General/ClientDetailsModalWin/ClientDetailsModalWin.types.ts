import { Func } from '@/types/functions.types';
import { Strings } from '@/types/types';

export interface IProps {
  showModalWin: boolean;
  setModalWinState: Func;
  logo: string;
  websiteAddress: string;
  text: string;
  projects: string;
  years: string;
  images: Strings;
}
