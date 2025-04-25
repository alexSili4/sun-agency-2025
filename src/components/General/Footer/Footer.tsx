import { FC } from 'react';
import { StyledFooter, ContentWrap, Container } from './Footer.styled';
// ----- components
import FooterGeneralInfo from '@GeneralComponents/FooterGeneralInfo';
import FooterMainInfo from '@GeneralComponents/FooterMainInfo';
import FooterSpline from '@GeneralComponents/FooterSpline';
import FooterLastSectionGradient from '@GeneralComponents/FooterLastSectionGradient';
import { IProps } from './Footer.types';

const Footer: FC<IProps> = ({ startColor, showContactsInfo }) => {
  return (
    <StyledFooter>
      {showContactsInfo ? (
        <Container>
          <FooterSpline />
          <FooterLastSectionGradient startColor={startColor} />
          <ContentWrap>
            <FooterMainInfo />
            <FooterGeneralInfo />
          </ContentWrap>
        </Container>
      ) : (
        <FooterGeneralInfo />
      )}
    </StyledFooter>
  );
};

export default Footer;
