import { Principles } from '@/types/about.types';

export interface IProps {
  principles: Principles;
  activeIndex: number;
  progress: number;
}

export interface IStyledListItemProps {
  isActiveBtn: boolean;
}

export interface IStyledProgressProps {
  progress: number;
}
