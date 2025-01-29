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
import NavLinks from '@GeneralComponents/NavLinks';

const FooterGeneralInfo: FC = () => {
  return (
    <Container>
      <ContentWrap>
        <GeneralContainer>
          <Content>
            <LinksWrap>
              <SunLogoLink />
              <NavLinks />
            </LinksWrap>
            <Copyright />
          </Content>
        </GeneralContainer>
      </ContentWrap>
    </Container>
  );
};

export default FooterGeneralInfo;
