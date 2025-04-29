import { ReactNode } from 'react';

export interface IProps {
  content: ReactNode;
  title: string;
  icon: ReactNode;
  isAroundTheClock?: boolean;
}
