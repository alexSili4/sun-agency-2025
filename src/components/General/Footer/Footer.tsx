import { FC } from 'react';
import { StyledFooter, ContentWrap } from './Footer.styled';
import FooterGeneralInfo from '@GeneralComponents/FooterGeneralInfo';
import FooterMainInfo from '@GeneralComponents/FooterMainInfo';

const Footer: FC = () => {
  return (
    <StyledFooter>
      <ContentWrap>
        <FooterMainInfo />
        <FooterGeneralInfo />
      </ContentWrap>
    </StyledFooter>
  );
};

export default Footer;
