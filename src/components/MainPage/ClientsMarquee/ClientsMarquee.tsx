import { FC } from 'react';
import Marquee from 'react-fast-marquee';
import { IProps } from './ClientsMarquee.types';
// ----- components
import ClientsMarqueeItem from '@MainPageComponents/ClientsMarqueeItem';

const ClientsMarquee: FC<IProps> = ({ clients, direction }) => {
  return (
    <Marquee direction={direction} autoFill pauseOnHover>
      {clients.map(
        (
          { primaryLogo, images, logo, projects, text, websiteAddress, years },
          index
        ) => (
          <ClientsMarqueeItem
            key={index}
            primaryLogo={primaryLogo}
            images={images}
            logo={logo}
            projects={projects}
            text={text}
            websiteAddress={websiteAddress}
            years={years}
          />
        )
      )}
    </Marquee>
  );
};

export default ClientsMarquee;
