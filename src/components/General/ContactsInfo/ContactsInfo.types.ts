import { OnInputChangeFunc } from '@/types/types';

export interface IProps {
  currentLang: string;
  showMenuModalWin: boolean;
  onChange: OnInputChangeFunc;
}

export interface IStyledContainerProps {
  showMenuModalWin: boolean;
}
