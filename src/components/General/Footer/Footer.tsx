import { FC } from 'react';
import { LinksWrap, StyledFooter } from './Footer.styled';
import SunLogoLink from '@GeneralComponents/SunLogoLink';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import Copyright from '@GeneralComponents/Copyright';

const Footer: FC = () => {
  return (
    <StyledFooter>
      <GeneralContainer>
        <div></div>
        <div>
          <LinksWrap>
            <SunLogoLink />
            <NavLinks />
          </LinksWrap>
          <Copyright />
        </div>
      </GeneralContainer>
    </StyledFooter>
  );
};

export default Footer;
