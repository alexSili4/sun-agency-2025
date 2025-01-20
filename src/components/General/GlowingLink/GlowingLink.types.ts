import { PagePaths } from '@/constants';
import { Func } from '@/types/types';
import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  width: number;
  title: string;
  href: PagePaths;
  onMouseEnter: Func;
  onMouseLeave: Func;
  onBlur: Func;
  onFocus: Func;
}

export interface IStyledProps {
  width: number;
}
