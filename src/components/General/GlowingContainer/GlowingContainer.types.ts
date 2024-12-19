import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  borderRadius: string;
  zIndex: number;
}

export interface IStyledBackdropProps {
  borderRadius: string;
}

export interface IStyledContainerProps {
  zIndex: number;
}
