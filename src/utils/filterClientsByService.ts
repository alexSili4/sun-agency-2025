import { CompanyClients } from '@/types/clients.types';
import { IFilterClientsByServiceProps } from '@/types/functions.types';

const filterClientsByService = ({
  clients,
  service,
}: IFilterClientsByServiceProps): CompanyClients => {
  if (!service) {
    return clients;
  }

  const filteredClients = clients.filter(({ filters }) =>
    filters.services.some(
      ({ value }) => value.toLowerCase() === service.toLowerCase()
    )
  );

  return filteredClients;
};

export default filterClientsByService;
