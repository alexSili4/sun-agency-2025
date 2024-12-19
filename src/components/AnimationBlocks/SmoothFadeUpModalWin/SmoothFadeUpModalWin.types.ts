import { Func } from '@/types/types';
import { ReactNode } from 'react';

export interface IProps {
  zIndex?: number;
  backgroundColor: string;
  children: ReactNode;
  setModalWin: Func;
}

export interface IStyledMotionDivProps {
  zIndex: number;
}

export interface IStyledBackdropWrapProps {
  backgroundColor: string;
}
