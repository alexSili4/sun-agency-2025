import { FC } from 'react';
import Clients from '@ClientsPageComponents/Clients';
import { clients } from '@/constants';

const ClientsPage: FC = () => {
  const { filters } = clients;

  return <Clients filters={filters} />;
};

export default ClientsPage;
