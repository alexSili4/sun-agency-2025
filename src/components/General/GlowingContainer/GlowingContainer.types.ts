import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  borderRadius: string;
  zIndex: number;
  isSubduedLighting?: boolean;
  top?: string;
  right?: string;
  isPositionAbsolute?: boolean;
  shouldHide?: boolean;
}

export interface IStyledBackdropProps {
  borderRadius: string;
  isSubduedLighting: boolean;
}

export interface IStyledContainerProps {
  zIndex: number;
  top: string;
  right: string;
  isPositionAbsolute: boolean;
  shouldHide: boolean;
}
