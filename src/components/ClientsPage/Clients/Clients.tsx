import { FC } from 'react';
import HeroSection from '@ClientsPageComponents/HeroSection';
import ClientsSection from '@ClientsPageComponents/ClientsSection';

const Clients: FC = () => {
  return (
    <>
      <HeroSection animationDuration={0.8} />
      <ClientsSection />
    </>
  );
};

export default Clients;
