import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  isFullHeight?: boolean;
  isPositionRelative?: boolean;
}

export interface IStyledContainerProps {
  isFullHeight: boolean;
  isPositionRelative: boolean;
}
