import { OnDivClickFunc, SetBooleanFunc } from '@/types/types';
import { ReactNode } from 'react';

export interface IProps {
  backgroundColor: string;
  children: ReactNode;
  zIndex?: number;
  hideModalWin: OnDivClickFunc;
  changeShouldHideMenuBtn?: SetBooleanFunc;
}

export interface IStyledMotionDivProps {
  zIndex: number;
}

export interface IStyledBackdropWrapProps {
  backgroundColor: string;
}
