import { Numbers } from '@/types/types';

const getProcessStepsAngles = (length: number): Numbers => {
  const start = 180 - (360 / length) * (length - 1);
  const angles = Array.from({ length }, (_, i) => start + (360 / length) * i);

  return angles;
};

export default getProcessStepsAngles;
