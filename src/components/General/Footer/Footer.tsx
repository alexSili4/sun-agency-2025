import { FC } from 'react';
import { StyledFooter, SectionBg, ContentWrap } from './Footer.styled';
// ----- components
import FooterGeneralInfo from '@GeneralComponents/FooterGeneralInfo';
import FooterMainInfo from '@GeneralComponents/FooterMainInfo';
import FooterSpline from '@GeneralComponents/FooterSpline';

const Footer: FC = () => {
  return (
    <StyledFooter>
      <FooterSpline />
      <SectionBg></SectionBg>
      <ContentWrap>
        <FooterMainInfo />
        <FooterGeneralInfo />
      </ContentWrap>
    </StyledFooter>
  );
};

export default Footer;
