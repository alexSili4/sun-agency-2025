import { OnBtnClickFunc } from '@/types/types';
import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  onClick: OnBtnClickFunc;
}
