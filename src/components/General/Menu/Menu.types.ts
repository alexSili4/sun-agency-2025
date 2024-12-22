import { OnInputChangeFunc } from '@/types/types';

export interface IProps {
  currentLang: string;
  onChange: OnInputChangeFunc;
}

export interface IStyledMenuBtnProps {
  shouldHide: boolean;
}
