import { RefDivObject } from '@/types/types';
import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  shouldShow: boolean;
  elementRef: RefDivObject;
  isPositionAbsolute: boolean;
  nextElementInView: boolean;
  bottom?: string;
  left?: string;
}

export interface IStyledContainerProps {
  isPositionAbsolute: boolean;
  bottom?: string;
  left?: string;
}
