import { FC } from 'react';
import SocialLinks from '@GeneralComponents/SocialLinks';
import { Container, Title, Content } from './FooterSocialLinks.styled';
import { theme } from '@/constants';

const FooterSocialLinks: FC = () => {
  return (
    <Container>
      <Content>
        <Title>Слідкуйте за нами</Title>
        <SocialLinks linkPadding={theme.spacing(12)} />
      </Content>
    </Container>
  );
};

export default FooterSocialLinks;
