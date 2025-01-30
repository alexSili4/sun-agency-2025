import { FC } from 'react';
import { Container, LinksWrap, PrivacyPolicyLink } from './GeneralLinks.styled';
import { Links, theme } from '@/constants';
// ----- components
import SocialLinks from '@GeneralComponents/SocialLinks';
import Copyright from '@GeneralComponents/Copyright';

const GeneralLinks: FC = () => {
  return (
    <Container>
      <Copyright isHiddenOnMobile />
      <LinksWrap>
        <SocialLinks
          mobileLinkPadding={0}
          deskLinkPadding={theme.spacing(17)}
        />
        <PrivacyPolicyLink
          href={Links.privacyPolicy}
          target='_blank'
          rel='noopener noreferrer'
        >
          Політика конфіденційності
        </PrivacyPolicyLink>
      </LinksWrap>
    </Container>
  );
};

export default GeneralLinks;
