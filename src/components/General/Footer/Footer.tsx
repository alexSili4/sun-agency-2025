import { FC } from 'react';
import { StyledFooter, ContentWrap } from './Footer.styled';
import FooterGeneralInfo from '@GeneralComponents/FooterGeneralInfo';
import FooterMainInfo from '@GeneralComponents/FooterMainInfo';
import FooterSpline from '@GeneralComponents/FooterSpline';

const Footer: FC = () => {
  return (
    <StyledFooter>
      <FooterSpline />
      <ContentWrap>
        <FooterMainInfo />
        <FooterGeneralInfo />
      </ContentWrap>
    </StyledFooter>
  );
};

export default Footer;
