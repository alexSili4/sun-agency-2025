import { CompanyClients } from '@/types/clients.types';
import { IFilterClientsByYearProps } from '@/types/functions.types';

const filterClientsByYear = ({
  clients,
  year,
}: IFilterClientsByYearProps): CompanyClients => {
  if (!year) {
    return clients;
  }

  const filteredClients = clients.filter(({ filters }) =>
    filters.years.some(
      ({ value }) => value.toLowerCase() === year.toLowerCase()
    )
  );

  return filteredClients;
};

export default filterClientsByYear;
