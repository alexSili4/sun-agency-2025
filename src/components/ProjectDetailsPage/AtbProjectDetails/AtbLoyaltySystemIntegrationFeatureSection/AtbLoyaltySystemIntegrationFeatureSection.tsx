import { FC } from 'react';
import { IProps } from './AtbLoyaltySystemIntegrationFeatureSection.types';
import {
  Container,
  Content,
  Image,
  Section,
} from './AtbLoyaltySystemIntegrationFeatureSection.styled';
// ----- components
import AtbFeatureSectionMetricsList from '@AtbProjectDetailsComponents/AtbFeatureSectionMetricsList';
import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import AtbContentContainer from '@AtbProjectDetailsComponents/AtbContentContainer';
import AtbText from '@AtbProjectDetailsComponents/AtbText';
import GeneralContainer from '@GeneralComponents/GeneralContainer';

const AtbLoyaltySystemIntegrationFeatureSection: FC<IProps> = ({
  banner,
  desc,
  metrics,
  title,
}) => {
  return (
    <Section>
      <Container>
        <HiddenSectionTitle title={title} />
        <GeneralContainer>
          <AtbContentContainer title={title}>
            <Content>
              <AtbText text={desc} />
              {metrics && <AtbFeatureSectionMetricsList metrics={metrics} />}
            </Content>
          </AtbContentContainer>
        </GeneralContainer>
        <Image src={banner} alt='' />
      </Container>
    </Section>
  );
};

export default AtbLoyaltySystemIntegrationFeatureSection;
