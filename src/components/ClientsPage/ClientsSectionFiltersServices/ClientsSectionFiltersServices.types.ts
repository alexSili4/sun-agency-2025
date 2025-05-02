import { SearchParamsKeys } from '@/constants';
import { Services } from '@/types/clients.types';

export interface IProps {
  searchParamsKey: SearchParamsKeys;
  services: Services;
}
