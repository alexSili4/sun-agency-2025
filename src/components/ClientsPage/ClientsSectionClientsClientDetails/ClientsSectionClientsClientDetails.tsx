import { FC, useState } from 'react';
import ClientDetailsModalWin from '@GeneralComponents/ClientDetailsModalWin';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { IProps } from './ClientsSectionClientsClientDetails.types';
import { Button, Logo } from './ClientsSectionClientsClientDetails.styled';

const ClientsSectionClientsClientDetails: FC<IProps> = ({
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
      <Button onClick={onShowClientDetailsBtnClick} type='button'>
        <Logo src={primaryLogo} alt='' />
      </Button>
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

export default ClientsSectionClientsClientDetails;
