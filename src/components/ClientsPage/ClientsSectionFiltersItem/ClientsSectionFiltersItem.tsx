import { theme } from '@/constants';
import { FC, useRef } from 'react';
import { IProps } from './ClientsSectionFiltersItem.types';
import { useClientsFilter, useDropdown } from '@/hooks';
import { getClientsFilterBtnTitle } from '@/utils';
import { FaChevronDown } from 'react-icons/fa';
import ClientsSectionFiltersItemList from '@ClientsPageComponents/ClientsSectionFiltersItemList';
import {
  Container,
  Button,
  BtnTitle,
  Backdrop,
} from './ClientsSectionFiltersItem.styled';

const ClientsSectionFiltersItem: FC<IProps> = ({
  searchParamsKey,
  filters,
  containerGap,
  filtersLength,
  widthDesk,
  maxHeight,
}) => {
  const listRef = useRef<HTMLDivElement>(null);
  const { isShowList, listHeight, onBackdropClick, onShowListBtnClick } =
    useDropdown(listRef);
  const { filter, onFilterChange } = useClientsFilter(searchParamsKey);

  const btnTitle = getClientsFilterBtnTitle({ filter, filters });

  return (
    <>
      {isShowList && <Backdrop onClick={onBackdropClick}></Backdrop>}
      <Container
        containerGap={containerGap}
        listLength={filtersLength}
        widthDesk={widthDesk}
      >
        <Button
          type='button'
          isShowList={isShowList}
          onClick={onShowListBtnClick}
        >
          <BtnTitle>{btnTitle}</BtnTitle>
          <FaChevronDown size={theme.iconSizes.clientsServices} />
        </Button>
        <ClientsSectionFiltersItemList
          currentFilter={filter}
          onServiceChange={onFilterChange}
          name={searchParamsKey}
          filters={filters}
          contentRef={listRef}
          height={listHeight}
          isShow={isShowList}
          maxHeight={maxHeight}
        />
      </Container>
    </>
  );
};

export default ClientsSectionFiltersItem;
