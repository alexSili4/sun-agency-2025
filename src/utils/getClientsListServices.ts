import { IServices, Services } from '@/types/clients.types';

const getClientsListServices = (services: IServices): Services => {
  const listServices = Object.values(services);

  return listServices;
};

export default getClientsListServices;
