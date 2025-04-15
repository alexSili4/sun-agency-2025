import { Process } from '@/types/about.types';
import { Variants } from 'framer-motion';

export interface IProps {
  process: Process;
  currentStep: number;
  textVariants: Variants;
}

export interface IStyledListItemProps {
  isHiddenElement: boolean;
}
