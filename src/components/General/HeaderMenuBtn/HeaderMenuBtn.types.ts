import { OnBtnClickFunc } from '@/types/functions.types';

export interface IProps {
  showMenuModalWin: boolean;
  shouldHideMenuBtn: boolean;
  onClick: OnBtnClickFunc;
  isDeskMenuBtn?: boolean;
  isMobileMenuBtn?: boolean;
}

export interface IStyledButtonProps {
  shouldHide: boolean;
  isDeskMenuBtn: boolean;
  isMobileMenuBtn: boolean;
}
