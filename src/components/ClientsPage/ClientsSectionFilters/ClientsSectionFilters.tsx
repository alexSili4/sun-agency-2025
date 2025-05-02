import { FC } from 'react';
import { Container, Content } from './ClientsSectionFilters.styled';
import ClientsSectionFiltersCategories from '@ClientsPageComponents/ClientsSectionFiltersCategories';
import ClientsSectionFiltersServices from '@ClientsPageComponents/ClientsSectionFiltersServices';
import ClientsSectionFiltersDate from '@ClientsPageComponents/ClientsSectionFiltersDate';
import { IProps } from './ClientsSectionFilters.types';
import { getClientsListCategories, getClientsListServices } from '@/utils';
import { SearchParamsKeys } from '@/constants';

const ClientsSectionFilters: FC<IProps> = ({ filters }) => {
  const { categories, services } = filters;

  const listCategories = getClientsListCategories(categories);
  const listServices = getClientsListServices(services);

  return (
    <Container>
      <ClientsSectionFiltersCategories
        categories={listCategories}
        searchParamsKey={SearchParamsKeys.category}
      />
      <Content>
        <ClientsSectionFiltersServices
          services={listServices}
          searchParamsKey={SearchParamsKeys.service}
        />
        <ClientsSectionFiltersDate />
      </Content>
    </Container>
  );
};

export default ClientsSectionFilters;
