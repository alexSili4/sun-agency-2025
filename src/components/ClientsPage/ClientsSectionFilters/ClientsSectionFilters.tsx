import { FC } from 'react';
import { Container, Content } from './ClientsSectionFilters.styled';
import ClientsSectionFiltersTags from '@ClientsPageComponents/ClientsSectionFiltersTags';
import ClientsSectionFiltersServices from '@ClientsPageComponents/ClientsSectionFiltersServices';
import ClientsSectionFiltersDate from '@ClientsPageComponents/ClientsSectionFiltersDate';

const ClientsSectionFilters: FC = () => {
  return (
    <Container>
      <ClientsSectionFiltersTags />
      <Content>
        <ClientsSectionFiltersServices />
        <ClientsSectionFiltersDate />
      </Content>
    </Container>
  );
};

export default ClientsSectionFilters;
