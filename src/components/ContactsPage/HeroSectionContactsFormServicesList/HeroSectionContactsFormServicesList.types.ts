import { Services } from '@/types/contacts.types';
import { RefDivObject } from '@/types/types';

export interface IProps {
  services: Services;
  settings: object;
  isShow: boolean;
  contentRef: RefDivObject;
  height: number;
}

export interface IStyledContainerProps {
  isShow: boolean;
  height: number;
}
