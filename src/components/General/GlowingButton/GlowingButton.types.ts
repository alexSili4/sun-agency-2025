import { OnBtnClickFunc } from '@/types/functions.types';
import { ReactNode } from 'react';

export interface IProps {
  width: number;
  children: ReactNode;
  onClick: OnBtnClickFunc;
  animationData: object;
  glowHeight: number;
  glowWidth: number;
  loop?: boolean;
  isPositionAbsolute?: boolean;
  topMob?: string;
  topDesk?: string;
  rightMob?: string;
  rightDesk?: string;
}

export interface IStyledProps {
  width: number;
  isPositionAbsolute: boolean;
  topMob: string;
  topDesk: string;
  rightMob: string;
  rightDesk: string;
}
