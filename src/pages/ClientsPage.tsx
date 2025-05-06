import { FC } from 'react';
import Clients from '@ClientsPageComponents/Clients';
import { clients } from '@/constants';

const ClientsPage: FC = () => {
  const { filters, clients: companyClients } = clients;

  return <Clients filters={filters} clients={companyClients} />;
};

export default ClientsPage;
