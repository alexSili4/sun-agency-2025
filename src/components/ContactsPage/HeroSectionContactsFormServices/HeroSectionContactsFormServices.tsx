import { FC, useEffect, useRef, useState } from 'react';
import { IProps } from './HeroSectionContactsFormServices.types';
import HeroSectionContactsFormServicesList from '@ContactsPageComponents/HeroSectionContactsFormServicesList';
import { Container, Backdrop } from './HeroSectionContactsFormServices.styled';
import { makeBlur } from '@/utils';
import { BtnClickEvent } from '@/types/types';
import HeroSectionContactsFormServicesBtn from '@ContactsPageComponents/HeroSectionContactsFormServicesBtn';

const HeroSectionContactsFormServices: FC<IProps> = ({
  services,
  btnTitle,
  settings,
  isDefaultBtnTitle,
}) => {
  const [isShowList, setIsShowList] = useState<boolean>(false);
  const [listHeight, setListHeight] = useState<number>(0);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;

    if (list) {
      setListHeight(list.scrollHeight);
    }
  }, []);

  const toggleIsShowList = () => {
    setIsShowList((prevState) => !prevState);
  };

  const onShowListBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleIsShowList();
  };

  const onBackdropClick = () => {
    toggleIsShowList();
  };

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
