import { FC } from 'react';
import { Container, Content } from './ClientsSectionFilters.styled';
import ClientsSectionFiltersCategories from '@ClientsPageComponents/ClientsSectionFiltersCategories';
import ClientsSectionFiltersServices from '@ClientsPageComponents/ClientsSectionFiltersServices';
import ClientsSectionFiltersDate from '@ClientsPageComponents/ClientsSectionFiltersDate';
import { IProps } from './ClientsSectionFilters.types';
import { getClientsListCategories } from '@/utils';

const ClientsSectionFilters: FC<IProps> = ({ filters }) => {
  const { categories } = filters;

  const listCategories = getClientsListCategories(categories);

  return (
    <Container>
      <ClientsSectionFiltersCategories categories={listCategories} />
      <Content>
        <ClientsSectionFiltersServices />
        <ClientsSectionFiltersDate />
      </Content>
    </Container>
  );
};

export default ClientsSectionFilters;
