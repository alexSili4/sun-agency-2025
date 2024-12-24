import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  borderRadius: string;
  zIndex: number;
  shouldHide?: boolean;
}

export interface IStyledBackdropProps {
  borderRadius: string;
}

export interface IStyledContainerProps {
  zIndex: number;
  shouldHide: boolean;
}
