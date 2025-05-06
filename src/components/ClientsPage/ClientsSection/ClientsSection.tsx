import { FC } from 'react';
import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import ClientsSectionFilters from '@ClientsPageComponents/ClientsSectionFilters';
import ClientsSectionClientsList from '@ClientsPageComponents/ClientsSectionClientsList';
import { Section, Container } from './ClientsSection.styled';
import { IProps } from './ClientsSection.types';
import { useFilteredClients } from '@/hooks';

const ClientsSection: FC<IProps> = ({ filters, clients }) => {
  const filteredClients = useFilteredClients(clients);

  return (
    <Section>
      <HiddenSectionTitle title='Наші клієнти' />
      <GeneralContainer>
        <Container>
          <ClientsSectionFilters filters={filters} otherFiltersGap={16} />
          <ClientsSectionClientsList clients={filteredClients} />
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default ClientsSection;
