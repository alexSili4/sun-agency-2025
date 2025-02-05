import { FC } from 'react';
import { LinksWrap, Container } from './FooterMainInfo.styled';
// ----- components
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import FooterSocialLinks from '@GeneralComponents/FooterSocialLinks';
import FooterAddress from '@GeneralComponents/FooterAddress';
import FooterContacts from '@GeneralComponents/FooterContacts';

const FooterMainInfo: FC = () => {
  return (
    <GeneralContainer>
      <Container>
        <FooterContacts />
        <LinksWrap>
          <FooterSocialLinks />
          <FooterAddress />
        </LinksWrap>
      </Container>
    </GeneralContainer>
  );
};

export default FooterMainInfo;
