import { RefDivObject } from '@/types/types';

export interface IProps {
  img: string;
  isShowLogo: boolean;
  isShow: boolean;
  activePointRotate: number;
  activePointTranslateY: number;
  containerRef: RefDivObject;
}

export interface IStyledLogoProps {
  isShow: boolean;
  img: string;
}
