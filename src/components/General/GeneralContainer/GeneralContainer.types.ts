import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  isFullHeight?: boolean;
  isPositionRelative?: boolean;
  isPositionAbsolute?: boolean;
  isCenterXPosition?: boolean;
  isPointerEventsNote?: boolean;
  top?: string;
}

export interface IStyledContainerProps {
  isFullHeight: boolean;
  isPositionRelative: boolean;
  isPositionAbsolute: boolean;
  isCenterXPosition: boolean;
  isPointerEventsNote: boolean;
  top: string | undefined;
}
