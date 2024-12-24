import {
  Func,
  OnAnchorClickFunc,
  OnInputChangeFunc,
  SetBooleanFunc,
} from '@/types/types';

export interface IProps {
  currentLang: string;
  onChange: OnInputChangeFunc;
  setModalWin: Func;
  showModalWin: boolean;
  backgroundColor: string;
  onClick: OnAnchorClickFunc;
  changeShouldHideMenuBtn: SetBooleanFunc;
}
