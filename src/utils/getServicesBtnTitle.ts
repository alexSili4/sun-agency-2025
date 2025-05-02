import { IGetServicesBtnTitleProps } from '@/types/functions.types';

const getServicesBtnTitle = ({
  services,
  filter,
}: IGetServicesBtnTitleProps): string => {
  const service = services.find(({ value }) => value === filter);
  const btnTitle = service ? service.label : '';

  return btnTitle;
};

export default getServicesBtnTitle;
