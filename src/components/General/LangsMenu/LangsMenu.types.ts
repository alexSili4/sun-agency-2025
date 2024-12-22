import { OnInputChangeFunc } from '@/types/types';

export interface IProps {
  currentLang: string;
  onChange: OnInputChangeFunc;
  isFullMenu?: boolean;
  isPositionAbsolute?: boolean;
  top?: string;
  left?: string;
}

export interface IStyledContainerProps {
  isFullMenu: boolean;
  isPositionAbsolute: boolean;
  top: string;
  left: string;
}

export interface IStyledLangsRadioBtnWrapProps {
  isFullMenu: boolean;
}
