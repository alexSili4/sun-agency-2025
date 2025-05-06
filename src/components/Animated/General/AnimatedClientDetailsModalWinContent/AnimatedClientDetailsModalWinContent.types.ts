import { Func, OnDivClickFunc } from '@/types/functions.types';
import { ReactNode } from 'react';

export interface IProps {
  setModalWinState: Func;
  children: ReactNode;
  hideModalWin: OnDivClickFunc;
}
