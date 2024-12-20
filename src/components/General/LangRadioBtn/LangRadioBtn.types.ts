import { OnInputChangeFunc } from '@/types/types';

export interface IProps {
  width: number;
  height: number;
  value: string;
  onChange: OnInputChangeFunc;
  checked: boolean;
  isLastRadioBtn?: boolean;
}

export interface IStyledContainerProps {
  isLastRadioBtn: boolean;
}

export interface IStyledTitleWrapProps {
  width: number;
  height: number;
}
