import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  isFullHeight?: boolean;
}

export interface IStyledContainerProps {
  isFullHeight: boolean;
}
