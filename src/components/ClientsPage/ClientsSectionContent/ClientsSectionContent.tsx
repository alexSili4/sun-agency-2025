import { FC } from 'react';
import ClientsSectionFilters from '@ClientsPageComponents/ClientsSectionFilters';
import AnimatedClientsSectionClientsList from '@AnimatedClientsPageComponents/AnimatedClientsSectionClientsList';
import { Container } from './ClientsSectionContent.styled';
import { IProps } from './ClientsSectionContent.types';

const ClientsSectionContent: FC<IProps> = ({ clients, filters }) => {
  return (
    <Container>
      <ClientsSectionFilters filters={filters} otherFiltersGap={16} />
      <AnimatedClientsSectionClientsList clients={clients} />
    </Container>
  );
};

export default ClientsSectionContent;
