import { FC } from 'react';
import { Container, Title, Content } from './FooterSocialLinks.styled';
import { theme } from '@/constants';
// ----- components
import SocialLinks from '@GeneralComponents/SocialLinks';

const FooterSocialLinks: FC = () => {
  return (
    <Container>
      <Content>
        <Title>Слідкуйте за нами</Title>
        <SocialLinks
          mobileLinkPadding={theme.spacing(5)}
          deskLinkPadding={theme.spacing(12)}
          isFooter
        />
      </Content>
    </Container>
  );
};

export default FooterSocialLinks;
