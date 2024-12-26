import { FC } from 'react';
import {
  LinksWrap,
  StyledFooter,
  GeneralInfoWrap,
  MainInfoWrap,
} from './Footer.styled';
import SunLogoLink from '@GeneralComponents/SunLogoLink';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import Copyright from '@GeneralComponents/Copyright';
import NavLinks from '@GeneralComponents/NavLinks';
import FooterSocialLinks from '@GeneralComponents/FooterSocialLinks';
import Address from '@GeneralComponents/Address';
import FooterContacts from '@GeneralComponents/FooterContacts';

const Footer: FC = () => {
  return (
    <StyledFooter>
      <GeneralContainer>
        <MainInfoWrap>
          <FooterContacts />
          <div>
            <FooterSocialLinks />
            <Address />
          </div>
        </MainInfoWrap>
        <GeneralInfoWrap>
          <LinksWrap>
            <SunLogoLink />
            <NavLinks />
          </LinksWrap>
          <Copyright />
        </GeneralInfoWrap>
      </GeneralContainer>
    </StyledFooter>
  );
};

export default Footer;
