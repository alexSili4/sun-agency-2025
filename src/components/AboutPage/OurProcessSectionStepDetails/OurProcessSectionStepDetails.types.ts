import { RefDivObject } from '@/types/types';
import { Variants } from 'framer-motion';

export interface IProps {
  img: string;
  text: string;
  isCurrentStep: boolean;
  index: number;
  textVariants: Variants;
  number: string;
  total: string;
  isShow: boolean;
  activePointRotate: number;
  activePointTranslateY: number;
  processImgContainerRef: RefDivObject;
}
