import { Variants } from 'framer-motion';

export interface IProps {
  img: string;
  text: string;
  isPositionAbsolute: boolean;
  isCurrentStep: boolean;
  index: number;
  textVariants: Variants;
}

export interface IStyledContainerProps {
  isPositionAbsolute: boolean;
}
