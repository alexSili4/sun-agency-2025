import { NumberOrNull, OnAnchorClickFunc } from '@/types/types';

export interface IProps {
  onClick: OnAnchorClickFunc;
}

export interface IStyledLinksListProps {
  isShowList: boolean;
  scrollHeight: NumberOrNull;
}

export interface IStyledIconWrapProps {
  isShowList: boolean;
}
