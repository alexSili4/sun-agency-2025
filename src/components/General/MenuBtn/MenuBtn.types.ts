import { OnBtnClickFunc } from '@/types/types';

export interface IProps {
  showMenuModalWin: boolean;
  shouldHideMenuBtn: boolean;
  onClick: OnBtnClickFunc;
}

export interface IStyledButtonProps {
  shouldHide: boolean;
}
