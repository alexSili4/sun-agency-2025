import { SearchParamsKeys } from '@/constants';
import { Filters } from '@/types/clients.types';
import { OnInputChangeFunc } from '@/types/functions.types';
import { NumberOrUndefined, RefDivObject } from '@/types/types';

export interface IProps {
  currentFilter: string;
  filters: Filters;
  name: SearchParamsKeys;
  contentRef: RefDivObject;
  isShow: boolean;
  height: number;
  onServiceChange: OnInputChangeFunc;
  maxHeight: NumberOrUndefined;
}

export interface IStyledContainerProps {
  height: number;
  isShow: boolean;
}

export interface IStyledListWrapProps {
  maxHeight: NumberOrUndefined;
}

export interface IStyledListContainerProps {
  maxHeight: NumberOrUndefined;
}
