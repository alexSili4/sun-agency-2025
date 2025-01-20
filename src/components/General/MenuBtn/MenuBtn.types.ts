import { OnBtnClickFunc } from '@/types/types';

export interface IProps {
  showMenuModalWin: boolean;
  shouldHideMenuBtn: boolean;
  onMenuBtnClick: OnBtnClickFunc;
}

export interface IStyledButtonProps {
  shouldHide: boolean;
}
