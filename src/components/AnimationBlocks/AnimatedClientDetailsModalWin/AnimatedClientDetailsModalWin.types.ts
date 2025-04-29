import { Func } from '@/types/functions.types';
import { ReactNode } from 'react';

export interface IProps {
  setModalWinState: Func;
  showModalWin: boolean;
  children: ReactNode;
}
