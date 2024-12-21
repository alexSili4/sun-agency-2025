import { Func, OnAnchorClickFunc } from '@/types/types';

export interface IProps {
  setModalWin: Func;
  showModalWin: boolean;
  backgroundColor: string;
  onClick: OnAnchorClickFunc;
}
