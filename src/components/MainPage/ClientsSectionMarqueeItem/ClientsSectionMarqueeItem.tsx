import { FC, useState } from 'react';
import {
  ClientLogo,
  ShowClientDetailsBtn,
} from './ClientsSectionMarqueeItem.styled';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { IProps } from './ClientsSectionMarqueeItem.types';
// ----- components
import ClientsSectionClientDetailsModalWin from '@MainPageComponents/ClientsSectionClientDetailsModalWin';

const ClientsSectionMarqueeItem: FC<IProps> = ({
  primaryLogo,
  images,
  logo,
  projects,
  text,
  websiteAddress,
  years,
}) => {
  const [showClientDetails, setShowClientDetails] = useState<boolean>(false);

  const toggleShowClientDetails = () => {
    setShowClientDetails((prevState) => !prevState);
  };

  const onShowClientDetailsBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleShowClientDetails();
  };

  return (
    <>
      <ShowClientDetailsBtn onClick={onShowClientDetailsBtnClick} type='button'>
        <ClientLogo src={primaryLogo} alt='' />
      </ShowClientDetailsBtn>
      <ClientsSectionClientDetailsModalWin
        showModalWin={showClientDetails}
        setModalWinState={toggleShowClientDetails}
        images={images}
        logo={logo}
        projects={projects}
        text={text}
        websiteAddress={websiteAddress}
        years={years}
      />
    </>
  );
};

export default ClientsSectionMarqueeItem;
