import { AnyElements } from './types';

export interface IGetIsLastIndexProps {
  currentIndex: number;
  lastIndex: number;
}

export interface ISplitArray {
  firstItem: AnyElements;
  secondItem: AnyElements;
}

export interface ISmoothScrollProps {
  id: string;
  block?: 'nearest' | 'start' | 'center';
}

export interface IGetFlexItemWidthProps {
  listLength: number;
  listGap: number;
}

export interface IGetCurrentOpacity {
  value: number;
  index: number;
}

export interface IPadStartProps {
  value: string | number;
  maxLength: number;
  addSymbol: string;
}
