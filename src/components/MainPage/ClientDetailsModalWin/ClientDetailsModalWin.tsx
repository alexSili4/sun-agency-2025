import { FC } from 'react';
import AnimatedClientDetailsModalWin from '@AnimationBlocks/AnimatedClientDetailsModalWin';
import ClientDetails from '@MainPageComponents/ClientDetails';
import { IProps } from './ClientDetailsModalWin.types';

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
