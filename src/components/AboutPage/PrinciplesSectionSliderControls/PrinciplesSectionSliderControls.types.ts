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
  leftDesk: number;
  topDesk: number;
}

export interface IStyledImageProps {
  isActiveBtn: boolean;
}

export interface IStyledMarkerWrapProps {
  isActiveBtn: boolean;
  topDesk: number;
  leftDesk: number;
}

export interface IStyledMarkerProps {
  isActiveBtn: boolean;
}
