import { theme } from '@/constants';
import { FC } from 'react';
import { IProps } from './ClientsSectionFiltersServices.types';
import { useClientsFilter } from '@/hooks';
import { getServicesBtnTitle } from '@/utils';
import { FaChevronDown } from 'react-icons/fa';
import ClientsSectionFiltersServicesList from '@ClientsPageComponents/ClientsSectionFiltersServicesList';
import {
  Container,
  Button,
  BtnTitle,
} from './ClientsSectionFiltersServices.styled';

const ClientsSectionFiltersServices: FC<IProps> = ({
  searchParamsKey,
  services,
}) => {
  // const [isShowList, setIsShowList] = useState<boolean>(false);
  const { filter, onFilterChange } = useClientsFilter(searchParamsKey);
  const btnTitle = getServicesBtnTitle({ services, filter });

  return (
    <Container>
      <Button type='button'>
        <BtnTitle>{btnTitle}</BtnTitle>
        <FaChevronDown size={theme.iconSizes.clientsServices} />
      </Button>
      <ClientsSectionFiltersServicesList
        service={filter}
        onServiceChange={onFilterChange}
        name={searchParamsKey}
        services={services}
      />
    </Container>
  );
};

export default ClientsSectionFiltersServices;
