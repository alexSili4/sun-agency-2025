import { CompanyClients } from '@/types/clients.types';
import { IFilterClientsByCategoryProps } from '@/types/functions.types';

const filterClientsByCategory = ({
  clients,
  category,
}: IFilterClientsByCategoryProps): CompanyClients => {
  if (!category) {
    return clients;
  }

  const filteredClients = clients.filter(({ filters }) =>
    filters.categories.some(
      ({ value }) => value.toLowerCase() === category.toLowerCase()
    )
  );

  return filteredClients;
};

export default filterClientsByCategory;
