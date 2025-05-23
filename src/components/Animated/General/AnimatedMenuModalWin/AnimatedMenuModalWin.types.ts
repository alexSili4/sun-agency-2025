import {
  Func,
  OnAnchorClickFunc,
  OnInputChangeFunc,
  SetBooleanFunc,
} from '@/types/functions.types';

export interface IProps {
  currentLang: string;
  onChange: OnInputChangeFunc;
  setModalWinState: Func;
  showModalWin: boolean;
  backgroundColor: string;
  onClick: OnAnchorClickFunc;
  changeShouldHideMenuBtn: SetBooleanFunc;
}
