import { Func, OnDivClickFunc } from '@/types/types';
import { ReactNode } from 'react';

export interface IProps {
  setModalWinState: Func;
  children: ReactNode;
  hideModalWin: OnDivClickFunc;
}
