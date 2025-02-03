import { FC } from 'react';
import { Container, LinksWrap, PrivacyPolicyLink } from './GeneralLinks.styled';
import { Links } from '@/constants';
// ----- components
import SocialLinks from '@GeneralComponents/SocialLinks';
import Copyright from '@GeneralComponents/Copyright';
import { IProps } from './GeneralLinks.types';

const GeneralLinks: FC<IProps> = ({ deskLinkPadding }) => {
  return (
    <Container>
      <Copyright isHiddenOnMobile />
      <LinksWrap>
        <SocialLinks mobileLinkPadding={0} deskLinkPadding={deskLinkPadding} />
        <PrivacyPolicyLink
          href={Links.privacyPolicy}
          target='_blank'
          rel='noopener noreferrer'
          deskLinkPadding={deskLinkPadding}
        >
          Політика конфіденційності
        </PrivacyPolicyLink>
      </LinksWrap>
    </Container>
  );
};

export default GeneralLinks;
