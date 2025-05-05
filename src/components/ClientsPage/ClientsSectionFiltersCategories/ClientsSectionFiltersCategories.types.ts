import { SearchParamsKeys } from '@/constants';
import { Filters } from '@/types/clients.types';

export interface IProps {
  categories: Filters;
  searchParamsKey: SearchParamsKeys;
}
