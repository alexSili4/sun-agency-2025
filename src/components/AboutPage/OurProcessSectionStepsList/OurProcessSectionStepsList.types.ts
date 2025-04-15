import { Process } from '@/types/about.types';
import { MotionValueNumber } from '@/types/types';
import { Variants } from 'framer-motion';

export interface IProps {
  process: Process;
  activeIndex: MotionValueNumber;
  textVariants: Variants;
}

export interface IStyledListItemProps {
  isHiddenElement: boolean;
}
