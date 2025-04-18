import { FC } from 'react';
import { StyledFooter, ContentWrap } from './Footer.styled';
// ----- components
import FooterGeneralInfo from '@GeneralComponents/FooterGeneralInfo';
import FooterMainInfo from '@GeneralComponents/FooterMainInfo';
import FooterSpline from '@GeneralComponents/FooterSpline';
import FooterLastSectionGradient from '@GeneralComponents/FooterLastSectionGradient';
import { IProps } from './Footer.types';

const Footer: FC<IProps> = ({ startColor }) => {
  return (
    <StyledFooter>
      <FooterSpline />
      <FooterLastSectionGradient startColor={startColor} />
      <ContentWrap>
        <FooterMainInfo />
        <FooterGeneralInfo />
      </ContentWrap>
    </StyledFooter>
  );
};

export default Footer;
