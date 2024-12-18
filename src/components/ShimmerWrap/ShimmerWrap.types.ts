import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  rounded: number;
  width: number;
  height?: number;
}

export interface IStyledBackdrop {
  width: number;
  height: number;
  rounded: number;
}
