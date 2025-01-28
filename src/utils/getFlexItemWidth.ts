import { IGetFlexItemWidthProps } from '@/types/functions.types';

const getFlexItemWidth = ({
  listLength,
  listGap,
}: IGetFlexItemWidthProps): string => {
  const totalGap = `${listLength - 1 * listGap}px`;

  return `(100% - ${totalGap}) / ${listLength}`;
};

export default getFlexItemWidth;
