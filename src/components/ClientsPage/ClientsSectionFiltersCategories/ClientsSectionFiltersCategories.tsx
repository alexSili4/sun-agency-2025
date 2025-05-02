import { FC } from 'react';
import { IProps } from './ClientsSectionFiltersCategories.types';
import ClientsSectionFiltersCategoryDetails from '@ClientsPageComponents/ClientsSectionFiltersCategoryDetails';
import { List, ListItem } from './ClientsSectionFiltersCategories.styled';
import { useClientsFilter } from '@/hooks';

const ClientsSectionFiltersCategories: FC<IProps> = ({
  searchParamsKey,
  categories,
}) => {
  const { filter, onFilterChange } = useClientsFilter(searchParamsKey);

  return (
    <List>
      {categories.map(({ label, value }, index) => {
        const isChecked = filter === value;

        return (
          <ListItem key={index}>
            <ClientsSectionFiltersCategoryDetails
              label={label}
              value={value}
              name={searchParamsKey}
              isChecked={isChecked}
              onChange={onFilterChange}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default ClientsSectionFiltersCategories;
