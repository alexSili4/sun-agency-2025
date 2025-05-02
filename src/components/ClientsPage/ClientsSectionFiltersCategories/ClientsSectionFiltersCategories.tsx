import { FC } from 'react';
import { IProps } from './ClientsSectionFiltersCategories.types';
import { useSetSearchParams } from '@/hooks';
import ClientsSectionFiltersCategoryDetails from '@ClientsPageComponents/ClientsSectionFiltersCategoryDetails';
import { List, ListItem } from './ClientsSectionFiltersCategories.styled';
import { SearchParamsKeys } from '@/constants';
import { InputChangeEvent } from '@/types/types';
import { makeBlur } from '@/utils';

const ClientsSectionFiltersCategories: FC<IProps> = ({ categories }) => {
  const { searchParams, updateSearchParams } = useSetSearchParams();
  const category = searchParams.get(SearchParamsKeys.category);

  const onCategoryChange = (e: InputChangeEvent) => {
    const { name: key, value } = e.currentTarget;

    makeBlur(e.currentTarget);

    updateSearchParams({ key, value });
  };

  return (
    <List>
      {categories.map(({ label, value }, index) => {
        const isChecked = category === value;

        return (
          <ListItem key={index}>
            <ClientsSectionFiltersCategoryDetails
              label={label}
              value={value}
              isChecked={isChecked}
              onChange={onCategoryChange}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default ClientsSectionFiltersCategories;
