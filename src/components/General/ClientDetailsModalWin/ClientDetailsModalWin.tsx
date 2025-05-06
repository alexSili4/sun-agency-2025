import { FC } from 'react';
import { IProps } from './ClientDetailsModalWin.types';
// ----- components
import AnimatedClientDetailsModalWin from '@AnimatedGeneralComponents/AnimatedClientDetailsModalWin';
import ClientDetails from '@GeneralComponents/ClientDetails';

const ClientDetailsModalWin: FC<IProps> = ({
  setModalWinState,
  showModalWin,
  logo,
  websiteAddress,
  text,
  projects,
  years,
  images,
}) => {
  return (
    <AnimatedClientDetailsModalWin
      setModalWinState={setModalWinState}
      showModalWin={showModalWin}
    >
      <ClientDetails
        logo={logo}
        websiteAddress={websiteAddress}
        text={text}
        projects={projects}
        years={years}
        images={images}
      />
    </AnimatedClientDetailsModalWin>
  );
};

export default ClientDetailsModalWin;
