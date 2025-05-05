import { IClientsFilters } from '@/types/clients.types';

export interface IProps {
  filters: IClientsFilters;
  otherFiltersGap: number;
}

export interface IStyledContentProps {
  gap: number;
}
