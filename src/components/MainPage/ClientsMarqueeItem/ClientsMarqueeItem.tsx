import { FC, useState } from 'react';
import { ClientLogo, ShowClientDetailsBtn } from './ClientsMarqueeItem.styled';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import ClientDetailsModalWin from '@MainPageComponents/ClientDetailsModalWin';
import { IProps } from './ClientsMarqueeItem.types';

const ClientsMarqueeItem: FC<IProps> = ({
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
        <ClientLogo src={primaryLogo} />
      </ShowClientDetailsBtn>
      <ClientDetailsModalWin
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

export default ClientsMarqueeItem;
