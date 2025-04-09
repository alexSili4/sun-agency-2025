import { NumberOrUndefined } from '@/types/types';

export interface IProps {
  imgMob: string;
  imgDesk: string;
  topDesk: NumberOrUndefined;
  leftDesk: NumberOrUndefined;
  leftMob: NumberOrUndefined;
  topMob: NumberOrUndefined;
  bottomMob: NumberOrUndefined;
  rightMob: NumberOrUndefined;
  rightDesk: NumberOrUndefined;
  bottomDesk: NumberOrUndefined;
  widthMob: number;
  heightMob: number;
  widthDesk: number;
  heightDesk: number;
}

export interface IStyledContainerProps {
  leftMob: NumberOrUndefined;
  topMob: NumberOrUndefined;
  rightMob: NumberOrUndefined;
  bottomMob: NumberOrUndefined;
  leftDesk: NumberOrUndefined;
  topDesk: NumberOrUndefined;
  rightDesk: NumberOrUndefined;
  bottomDesk: NumberOrUndefined;
}
