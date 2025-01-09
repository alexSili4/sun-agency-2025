import { ISplitArray } from '@/types/functions.types';
import { AnyElements } from '@/types/types';

const splitArray = (arr: AnyElements): ISplitArray => {
  const mid = Math.ceil(arr.length / 2);

  const firstItem = arr.slice(0, mid);
  const secondItem = arr.slice(mid);

  return { firstItem, secondItem };
};

export default splitArray;
