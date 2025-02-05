import { OnInputChangeFunc } from '@/types/types';

export interface IProps {
  mobileWidth: number;
  deskWidth: number;
  value: string;
  onChange: OnInputChangeFunc;
  checked: boolean;
  isFullMenu: boolean;
  isLastRadioBtn?: boolean;
}

export interface IStyledContainerProps {
  isLastRadioBtn: boolean;
  isFullMenu: boolean;
}

export interface IStyledTitleWrapProps {
  mobileWidth: number;
  deskWidth: number;
  isFullMenu: boolean;
}

export interface IStyledTitleProps {
  isFullMenu: boolean;
}
