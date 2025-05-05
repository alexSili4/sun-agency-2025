import { IFilters, Filters } from '@/types/clients.types';

const getClientsFiltersList = (filters: IFilters): Filters => {
  const filtersList = Object.values(filters);

  return filtersList;
};

export default getClientsFiltersList;
