import { NumberOrUndefined } from '@/types/types';

export interface IProps {
  descPaddingTopMob: number;
  descPaddingBottomMob: number;
  descPaddingLeftMob: number;
  descPaddingRightMob: number;
  descPaddingTopDesk: number;
  descPaddingBottomDesk: number;
  descPaddingLeftDesk: number;
  descPaddingRightDesk: number;
  descTopMob: NumberOrUndefined;
  descBottomMob: NumberOrUndefined;
  descLeftMob: NumberOrUndefined;
  descRightMob: NumberOrUndefined;
  descTopDesk: NumberOrUndefined;
  descBottomDesk: NumberOrUndefined;
  descLeftDesk: NumberOrUndefined;
  descRightDesk: NumberOrUndefined;
  text: string;
  leaderLineImgDesk: string;
  leaderLineTopDesk: NumberOrUndefined;
  leaderLineWidthDesk: number;
  leaderLineHeightDesk: number;
  leaderLineLeftDesk: NumberOrUndefined;
  leaderLineBottomDesk: NumberOrUndefined;
  leaderLineImgMob: string;
  leaderLineBottomMob: NumberOrUndefined;
  leaderLineLeftMob: NumberOrUndefined;
  leaderLineRightDesk: NumberOrUndefined;
  leaderLineRightMob: NumberOrUndefined;
  leaderLineTopMob: NumberOrUndefined;
  leaderLineWidthMob: number;
  leaderLineHeightMob: number;
}

export interface IStyledContainerProps {
  paddingTopMob: number;
  paddingBottomMob: number;
  paddingLeftMob: number;
  paddingRightMob: number;
  paddingTopDesk: number;
  paddingBottomDesk: number;
  paddingLeftDesk: number;
  paddingRightDesk: number;
  topDesk: NumberOrUndefined;
  bottomDesk: NumberOrUndefined;
  leftDesk: NumberOrUndefined;
  rightDesk: NumberOrUndefined;
  topMob: NumberOrUndefined;
  bottomMob: NumberOrUndefined;
  leftMob: NumberOrUndefined;
  rightMob: NumberOrUndefined;
}
