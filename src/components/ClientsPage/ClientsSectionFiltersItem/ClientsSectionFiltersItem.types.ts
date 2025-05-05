import { SearchParamsKeys } from '@/constants';
import { Filters } from '@/types/clients.types';

export interface IProps {
  searchParamsKey: SearchParamsKeys;
  filters: Filters;
  containerGap: number;
  filtersLength: number;
  widthDesk: number;
  maxHeight?: number;
}

export interface IStyledContainerProps {
  containerGap: number;
  listLength: number;
  widthDesk: number;
}

export interface IStyledButtonProps {
  isShowList: boolean;
}
