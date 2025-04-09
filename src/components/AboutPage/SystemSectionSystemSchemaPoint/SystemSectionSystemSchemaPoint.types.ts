import { NumberOrUndefined } from '@/types/types';

export interface IProps {
  pointLeftDesk: number;
  pointLeftMob: number;
  pointTopDesk: number;
  pointTopMob: number;
  descPaddingBottomDesk: NumberOrUndefined;
  descPaddingBottomMob: NumberOrUndefined;
  descPaddingLeftDesk: NumberOrUndefined;
  descPaddingLeftMob: NumberOrUndefined;
  descPaddingRightDesk: NumberOrUndefined;
  descPaddingRightMob: NumberOrUndefined;
  descPaddingTopDesk: NumberOrUndefined;
  descPaddingTopMob: NumberOrUndefined;
  text: string;
  descTopDesk: NumberOrUndefined;
  descLeftDesk: NumberOrUndefined;
  descBottomDesk: NumberOrUndefined;
  descRightDesk: NumberOrUndefined;
  descTopMob: NumberOrUndefined;
  descLeftMob: NumberOrUndefined;
  descBottomMob: NumberOrUndefined;
  descRightMob: NumberOrUndefined;
  leaderLineHeightDesk: number;
  leaderLineImgDesk: string;
  leaderLineImgMob: string;
  leaderLineLeftDesk: NumberOrUndefined;
  leaderLineWidthDesk: number;
  leaderLineHeightMob: number;
  leaderLineWidthMob: number;
  leaderLineTopDesk: NumberOrUndefined;
  leaderLineBottomMob: NumberOrUndefined;
  leaderLineBottomDesk: NumberOrUndefined;
  leaderLineLeftMob: NumberOrUndefined;
  leaderLineRightDesk: NumberOrUndefined;
  leaderLineRightMob: NumberOrUndefined;
  leaderLineTopMob: NumberOrUndefined;
}

export interface IStyledContainerProps {
  topMob: number;
  leftMob: number;
  topDesk: number;
  leftDesk: number;
}
