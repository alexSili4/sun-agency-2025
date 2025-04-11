import { NumberOrUndefined } from '@/types/types';

export interface IProps {
  img: string;
  topMob: NumberOrUndefined;
  bottomMob: NumberOrUndefined;
  leftMob: NumberOrUndefined;
  rightMob: NumberOrUndefined;
  topDesk: NumberOrUndefined;
  bottomDesk: NumberOrUndefined;
  leftDesk: NumberOrUndefined;
  rightDesk: NumberOrUndefined;
  sizeMob: number;
  sizeDesk: number;
}

export interface IStyledCoinProps {
  sizeMob: number;
  sizeDesk: number;
}

export interface IStyledContainerProps {
  topMob: NumberOrUndefined;
  bottomMob: NumberOrUndefined;
  leftMob: NumberOrUndefined;
  rightMob: NumberOrUndefined;
  topDesk: NumberOrUndefined;
  bottomDesk: NumberOrUndefined;
  leftDesk: NumberOrUndefined;
  rightDesk: NumberOrUndefined;
}
