import { FC } from 'react';
import { IProps } from './AtbCashSystemIntegrationFeatureSection.types';
import {
  Content,
  Image,
  Section,
  Container,
} from './AtbCashSystemIntegrationFeatureSection.styled';
// ----- components
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import AtbContentContainer from '@AtbProjectDetailsComponents/AtbContentContainer';
import AtbText from '@AtbProjectDetailsComponents/AtbText';
import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';

const AtbCashSystemIntegrationFeatureSection: FC<IProps> = ({
  title,
  desc,
  banner,
}) => {
  return (
    <Section>
      <HiddenSectionTitle title={title} />
      <Container>
        <GeneralContainer>
          <Content>
            <AtbContentContainer title={title}>
              <AtbText text={desc} />
            </AtbContentContainer>
          </Content>
        </GeneralContainer>
        <Image src={banner} />
      </Container>
    </Section>
  );
};

export default AtbCashSystemIntegrationFeatureSection;
