import { FC } from 'react';
import SocialLinks from '@GeneralComponents/SocialLinks';
import {
  Container,
  Copyright,
  LinksWrap,
  PrivacyPolicyLink,
} from './GeneralLinks.styled';
import { Links } from '@/constants';

const GeneralLinks: FC = () => {
  return (
    <Container>
      <Copyright>© 2024 Сонце</Copyright>
      <LinksWrap>
        <SocialLinks />
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
