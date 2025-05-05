import { FC, useRef } from 'react';
import { IProps } from './HeroSectionContactsFormServices.types';
import HeroSectionContactsFormServicesList from '@ContactsPageComponents/HeroSectionContactsFormServicesList';
import { Container, Backdrop } from './HeroSectionContactsFormServices.styled';
import HeroSectionContactsFormServicesBtn from '@ContactsPageComponents/HeroSectionContactsFormServicesBtn';
import { useDropdown } from '@/hooks';

const HeroSectionContactsFormServices: FC<IProps> = ({
  services,
  btnTitle,
  settings,
  isDefaultBtnTitle,
}) => {
  const listRef = useRef<HTMLDivElement>(null);
  const { isShowList, listHeight, onBackdropClick, onShowListBtnClick } =
    useDropdown(listRef);

  return (
    <>
      {isShowList && <Backdrop onClick={onBackdropClick}></Backdrop>}
      <Container>
        <HeroSectionContactsFormServicesList
          services={services}
          settings={settings}
          isShow={isShowList}
          contentRef={listRef}
          height={listHeight}
        />
        <HeroSectionContactsFormServicesBtn
          btnTitle={btnTitle}
          onClick={onShowListBtnClick}
          isShowList={isShowList}
          isDefaultBtnTitle={isDefaultBtnTitle}
        />
      </Container>
    </>
  );
};

export default HeroSectionContactsFormServices;
