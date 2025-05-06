import { SearchParamsKeys } from '@/constants';
import useSetSearchParams from './useSetSearchParams';
import { useMemo } from 'react';
import { CompanyClients } from '@/types/clients.types';
import {
  filterClientsByCategory,
  filterClientsByService,
  filterClientsByYear,
} from '@/utils';

const useFilteredClients = (clients: CompanyClients): CompanyClients => {
  const { searchParams } = useSetSearchParams();

  const category = searchParams.get(SearchParamsKeys.category) ?? '';
  const service = searchParams.get(SearchParamsKeys.service) ?? '';
  const year = searchParams.get(SearchParamsKeys.year) ?? '';

  const filteredClientsByCategory = useMemo(
    () => filterClientsByCategory({ clients, category }),
    [clients, category]
  );

  const filteredClientsByService = useMemo(
    () =>
      filterClientsByService({ clients: filteredClientsByCategory, service }),
    [filteredClientsByCategory, service]
  );

  const filteredClients = useMemo(
    () =>
      filterClientsByYear({
        clients: filteredClientsByService,
        year,
      }),
    [filteredClientsByService, year]
  );

  return filteredClients;
};

export default useFilteredClients;
