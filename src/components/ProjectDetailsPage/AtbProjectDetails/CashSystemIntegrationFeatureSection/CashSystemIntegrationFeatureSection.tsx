import { FC } from 'react';
import { IProps } from './CashSystemIntegrationFeatureSection.types';
import {
  Content,
  Image,
  Section,
  Container,
} from './CashSystemIntegrationFeatureSection.styled';
// ----- components
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import ContentContainer from '@AtbProjectDetailsComponents/ContentContainer';
import Text from '@AtbProjectDetailsComponents/Text';
import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';

const CashSystemIntegrationFeatureSection: FC<IProps> = ({
  title,
  desc,
  banner,
}) => {
  return (
    <Section>
      <HiddenSectionTitle title={title} />
      <GeneralContainer>
        <Container>
          <Content>
            <ContentContainer title={title}>
              <Text text={desc} />
            </ContentContainer>
          </Content>
          <Image src={banner} alt='' />
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default CashSystemIntegrationFeatureSection;
