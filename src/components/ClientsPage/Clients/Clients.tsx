import { FC } from 'react';
import HeroSection from '@ClientsPageComponents/HeroSection';
import ClientsSection from '@ClientsPageComponents/ClientsSection';
import { IProps } from './Clients.types';

const Clients: FC<IProps> = ({ filters, clients }) => {
  return (
    <>
      <HeroSection animationDuration={0.8} />
      <ClientsSection filters={filters} clients={clients} />
    </>
  );
};

export default Clients;
