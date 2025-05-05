import { IGetClientsFilterBtnTitleProps } from '@/types/functions.types';

const getClientsFilterBtnTitle = ({
  filter,
  filters,
}: IGetClientsFilterBtnTitleProps): string => {
  const service = filters.find(({ value }) => value === filter);
  const btnTitle = service ? service.label : '';

  return btnTitle;
};

export default getClientsFilterBtnTitle;
