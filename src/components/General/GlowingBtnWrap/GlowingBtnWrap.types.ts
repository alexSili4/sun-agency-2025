import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  borderRadius: string;
  top: string;
  right: string;
  animationData: object;
  isPositionAbsolute: boolean;
  isSubduedLighting?: boolean;
}

export interface IStyledProps {
  width: number;
}
