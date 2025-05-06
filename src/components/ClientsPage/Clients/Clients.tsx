import { FC } from 'react';
import HeroSection from '@ClientsPageComponents/HeroSection';
import ClientsSection from '@ClientsPageComponents/ClientsSection';
import { IProps } from './Clients.types';
import { Container, Content } from './Clients.styled';
import ClientsBg from '@ClientsPageComponents/ClientsBg';

const Clients: FC<IProps> = ({ filters, clients }) => {
  return (
    <Container>
      <ClientsBg />
      <Content>
        <HeroSection animationDuration={0.8} />
        <ClientsSection filters={filters} clients={clients} />
      </Content>
    </Container>
  );
};

export default Clients;
