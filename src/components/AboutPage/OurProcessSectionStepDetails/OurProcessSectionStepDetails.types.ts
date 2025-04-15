import { MotionValueNumber } from '@/types/types';
import { Variants } from 'framer-motion';

export interface IProps {
  img: string;
  text: string;
  isPositionAbsolute: boolean;
  activeIndex: MotionValueNumber;
  index: number;
  textVariants: Variants;
}

export interface IStyledContainerProps {
  isPositionAbsolute: boolean;
}
