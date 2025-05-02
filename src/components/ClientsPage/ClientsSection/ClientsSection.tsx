import { FC } from 'react';
import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import ClientsSectionFilters from '@ClientsPageComponents/ClientsSectionFilters';
import ClientsSectionClientsList from '@ClientsPageComponents/ClientsSectionClientsList';
import { Section, Container } from './ClientsSection.styled';
import { IProps } from './ClientsSection.types';

const ClientsSection: FC<IProps> = ({ filters }) => {
  return (
    <Section>
      <HiddenSectionTitle title='Наші клієнти' />
      <GeneralContainer>
        <Container>
          <ClientsSectionFilters filters={filters} />
          <ClientsSectionClientsList />
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default ClientsSection;
