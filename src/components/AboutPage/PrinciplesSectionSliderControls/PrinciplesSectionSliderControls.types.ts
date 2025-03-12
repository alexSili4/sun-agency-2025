import { Principles } from '@/types/about.types';
import { NumberOrNull } from '@/types/types';

export interface IProps {
  principles: Principles;
  activeIndex: number;
  rotate: number;
  size: NumberOrNull;
}

export interface IStyledContainerProps {
  size: NumberOrNull;
}

export interface IStyledListProps {
  size: NumberOrNull;
  rotate: number;
}

export interface IStyledListItemProps {
  number: number;
  rotate: number;
  radius: number;
}

export interface IStyledImageProps {
  isActiveBtn: boolean;
}

export interface IStyledMarkerWrapProps {
  isActiveBtn: boolean;
}

export interface IStyledMarkerProps {
  isActiveBtn: boolean;
}
