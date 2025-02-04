import { OnBtnClickFunc } from '@/types/types';
import { ReactNode } from 'react';

export interface IProps {
  width: number;
  children: ReactNode;
  onClick: OnBtnClickFunc;
  animationData: object;
  glowHeight: number;
  glowWidth: number;
  loop?: boolean;
}

export interface IStyledProps {
  width: number;
}
