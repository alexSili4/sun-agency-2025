import { FC, useLayoutEffect, useRef, useState } from 'react';
import { Container, Content } from './ClientsSectionFilters.styled';
import ClientsSectionFiltersCategories from '@ClientsPageComponents/ClientsSectionFiltersCategories';
import ClientsSectionFiltersItem from '@ClientsPageComponents/ClientsSectionFiltersItem';
import { IProps } from './ClientsSectionFilters.types';
import { getClientsFiltersList } from '@/utils';
import { SearchParamsKeys } from '@/constants';

const ClientsSectionFilters: FC<IProps> = ({ filters, otherFiltersGap }) => {
  const [otherFilters, setOtherFilters] = useState<number>(0);
  const otherFiltersContainerRef = useRef<HTMLDivElement>(null);
  const { categories, services, years } = filters;

  const servicesList = getClientsFiltersList(services);
  const categoriesList = getClientsFiltersList(categories);
  const yearsList = getClientsFiltersList(years);

  useLayoutEffect(() => {
    const otherFiltersContainer = otherFiltersContainerRef.current;

    if (otherFiltersContainer) {
      setOtherFilters(otherFiltersContainer.children.length);
    }
  }, []);

  return (
    <Container>
      <ClientsSectionFiltersCategories
        categories={categoriesList}
        searchParamsKey={SearchParamsKeys.category}
      />
      <Content ref={otherFiltersContainerRef} gap={otherFiltersGap}>
        <ClientsSectionFiltersItem
          filters={servicesList}
          searchParamsKey={SearchParamsKeys.service}
          containerGap={otherFiltersGap}
          widthDesk={240}
          filtersLength={otherFilters}
        />
        <ClientsSectionFiltersItem
          filters={yearsList}
          searchParamsKey={SearchParamsKeys.year}
          containerGap={otherFiltersGap}
          widthDesk={184}
          filtersLength={otherFilters}
          maxHeight={259}
        />
      </Content>
    </Container>
  );
};

export default ClientsSectionFilters;
