import { InputChangeEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { useSetSearchParams } from '@/hooks';
import { SearchParamsKeys } from '@/constants';
import { IUseClientsFilter } from '@/types/hooks.types';

const useClientsFilter = (
  searchParamsKey: SearchParamsKeys
): IUseClientsFilter => {
  const { searchParams, updateSearchParams } = useSetSearchParams();
  const filter = searchParams.get(searchParamsKey) ?? '';

  const onFilterChange = (e: InputChangeEvent) => {
    const { name: key, value } = e.currentTarget;

    makeBlur(e.currentTarget);

    updateSearchParams({ key, value });
  };

  return {
    onFilterChange,
    filter,
  };
};

export default useClientsFilter;
