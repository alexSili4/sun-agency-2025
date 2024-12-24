import { Func, SetBooleanFunc } from '@/types/types';
import { ReactNode } from 'react';

export interface IProps {
  backgroundColor: string;
  children: ReactNode;
  zIndex?: number;
  duration?: number;
  setModalWin: Func;
  changeShouldHideMenuBtn?: SetBooleanFunc;
}

export interface IStyledMotionDivProps {
  zIndex: number;
}

export interface IStyledBackdropWrapProps {
  backgroundColor: string;
}
