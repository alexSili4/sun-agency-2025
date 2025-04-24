import { Process } from '@/types/about.types';
import { RefDivObject } from '@/types/types';

export interface IProps {
  process: Process;
  activePointTranslateY: number;
  processImgContainerRef: RefDivObject;
}
