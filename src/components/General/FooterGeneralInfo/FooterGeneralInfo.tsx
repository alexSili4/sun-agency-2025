import { FC } from 'react';
import {
  Container,
  Content,
  ContentWrap,
  LinksWrap,
} from './FooterGeneralInfo.styled';
// ----- components
import SunLogoLink from '@GeneralComponents/SunLogoLink';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import Copyright from '@GeneralComponents/Copyright';
import FooterNavLinks from '@GeneralComponents/FooterNavLinks';
import { footerNavLinks } from '@/constants';

const FooterGeneralInfo: FC = () => {
  return (
    <Container>
      <ContentWrap>
        <GeneralContainer>
          <Content>
            <LinksWrap>
              <SunLogoLink isFooter />
              <FooterNavLinks navLinks={footerNavLinks} />
            </LinksWrap>
            <Copyright isHiddenOnMobile />
          </Content>
        </GeneralContainer>
      </ContentWrap>
    </Container>
  );
};

export default FooterGeneralInfo;
