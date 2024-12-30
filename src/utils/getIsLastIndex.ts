import { IGetIsLastIndexProps } from '@/types/functions';

const getIsLastIndex = ({
  currentIndex,
  lastIndex,
}: IGetIsLastIndexProps): boolean => currentIndex === lastIndex;

export default getIsLastIndex;
