import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  borderRadius: string;
  zIndex: number;
  shouldHide?: boolean;
  isSubduedLighting?: boolean;
}

export interface IStyledBackdropProps {
  borderRadius: string;
  isSubduedLighting: boolean;
}

export interface IStyledContainerProps {
  zIndex: number;
  shouldHide: boolean;
}
