import { RefDivObject } from '@/types/types';
import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  shouldShow: boolean;
  elementRef: RefDivObject;
  isPositionAbsolute: boolean;
  nextElementInView: boolean;
}

export interface IStyledContainerProps {
  isPositionAbsolute: boolean;
}
