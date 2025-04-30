import { RefDivObject, Strings } from '@/types/types';

export interface IProps {
  services: Strings;
  settings: object;
  isShow: boolean;
  contentRef: RefDivObject;
  height: number;
}

export interface IStyledContainerProps {
  isShow: boolean;
  height: number;
}
