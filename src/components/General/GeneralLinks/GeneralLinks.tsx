import { FC } from 'react';
import SocialLinks from '@GeneralComponents/SocialLinks';
import { Container, LinksWrap, PrivacyPolicyLink } from './GeneralLinks.styled';
import { Links, theme } from '@/constants';
import Copyright from '@GeneralComponents/Copyright';

const GeneralLinks: FC = () => {
  return (
    <Container>
      <Copyright />
      <LinksWrap>
        <SocialLinks linkPadding={theme.spacing(17)} />
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
