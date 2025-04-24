import { Process } from '@/types/about.types';
import { RefDivObject } from '@/types/types';
import { Variants } from 'framer-motion';

export interface IProps {
  process: Process;
  currentStep: number;
  textVariants: Variants;
  activePointRotate: number;
  activePointTranslateY: number;
  processImgContainerRef: RefDivObject;
}
