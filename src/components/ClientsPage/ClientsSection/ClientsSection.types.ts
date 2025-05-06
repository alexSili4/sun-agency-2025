import { CompanyClients, IClientsFilters } from '@/types/clients.types';

export interface IProps {
  filters: IClientsFilters;
  clients: CompanyClients;
}
