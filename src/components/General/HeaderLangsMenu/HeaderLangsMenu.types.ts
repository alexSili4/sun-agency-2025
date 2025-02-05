import { OnInputChangeFunc } from '@/types/types';

export interface IProps {
  currentLang: string;
  onChange: OnInputChangeFunc;
  isFullMenu?: boolean;
  isPositionAbsolute?: boolean;
  top?: string;
  left?: string;
  isHiddenOnMobile?: boolean;
  isHidden?: boolean;
}

export interface IStyledContainerProps {
  isFullMenu: boolean;
  isPositionAbsolute: boolean;
  top: string;
  left: string;
  isHiddenOnMobile: boolean;
  isHidden: boolean;
}

export interface IStyledLangsRadioBtnWrapProps {
  isFullMenu: boolean;
}
