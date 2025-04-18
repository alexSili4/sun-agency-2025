import { IPadStartProps } from '@/types/functions.types';

const padStart = ({ value, maxLength, addSymbol }: IPadStartProps): string => {
  const updatedValue = String(value).padStart(maxLength, addSymbol);

  return updatedValue;
};

export default padStart;
