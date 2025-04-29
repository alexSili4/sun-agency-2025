import { OnBtnClickFunc, OnInputChangeFunc } from '@/types/functions.types';

export interface IProps {
  currentLang: string;
  showMenuModalWin: boolean;
  shouldHideMenuBtn: boolean;
  onMenuBtnClick: OnBtnClickFunc;
  onLangRadioBtnChange: OnInputChangeFunc;
}

export interface IStyledContainerProps {
  showMenuModalWin: boolean;
}
