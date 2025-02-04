import { FC } from 'react';
import { IProps } from './ClientsSectionClientDetailsModalWin.types';
// ----- components
import AnimatedClientDetailsModalWin from '@AnimationBlocks/AnimatedClientDetailsModalWin';
import ClientsSectionClientDetails from '@MainPageComponents/ClientsSectionClientDetails';

const ClientsSectionClientDetailsModalWin: FC<IProps> = ({
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
      <ClientsSectionClientDetails
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

export default ClientsSectionClientDetailsModalWin;
