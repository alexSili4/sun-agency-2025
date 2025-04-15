import { IGetCurrentOpacity } from '@/types/functions.types';

const getCurrentOpacity = ({ value, index }: IGetCurrentOpacity): number => {
  const roundValue = Math.round(value);
  const isTargetIndex = roundValue === index;
  const opacity = isTargetIndex ? 1 : 0;

  return opacity;
};

export default getCurrentOpacity;
