import { FC } from 'react';
import Marquee from 'react-fast-marquee';
import { IProps } from './ClientsSectionMarquee.types';
// ----- components
import ClientsSectionMarqueeItem from '@MainPageComponents/ClientsSectionMarqueeItem';

const ClientsSectionMarquee: FC<IProps> = ({ clients, direction }) => {
  return (
    <Marquee direction={direction} autoFill pauseOnHover>
      {clients.map(
        (
          {
            primaryLogo,
            images,
            logo,
            text,
            websiteAddress,
            generalInfo: { projects, years },
          },
          index
        ) => (
          <ClientsSectionMarqueeItem
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

export default ClientsSectionMarquee;
