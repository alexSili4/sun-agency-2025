import { IGetIsLastIndexProps } from '@/types/functions.types';

const getIsLastIndex = ({
  currentIndex,
  lastIndex,
}: IGetIsLastIndexProps): boolean => currentIndex === lastIndex;

export default getIsLastIndex;
