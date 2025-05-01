import { FC } from 'react';
import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import ClientsSectionFilters from '@ClientsPageComponents/ClientsSectionFilters';
import ClientsSectionClientsList from '@ClientsPageComponents/ClientsSectionClientsList';
import { Section, Container } from './ClientsSection.styled';

const ClientsSection: FC = () => {
  return (
    <Section>
      <HiddenSectionTitle title='Наші клієнти' />
      <GeneralContainer>
        <Container>
          <ClientsSectionFilters />
          <ClientsSectionClientsList />
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default ClientsSection;
