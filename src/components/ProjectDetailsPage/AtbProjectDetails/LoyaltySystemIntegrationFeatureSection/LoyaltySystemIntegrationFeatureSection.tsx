import { FC } from 'react';
import { IProps } from './LoyaltySystemIntegrationFeatureSection.types';
import {
  Container,
  Content,
  Image,
  Section,
} from './LoyaltySystemIntegrationFeatureSection.styled';
// ----- components
import FeatureSectionMetricsList from '@AtbProjectDetailsComponents/FeatureSectionMetricsList';
import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import ContentContainer from '@AtbProjectDetailsComponents/ContentContainer';
import Text from '@AtbProjectDetailsComponents/Text';
import GeneralContainer from '@GeneralComponents/GeneralContainer';

const LoyaltySystemIntegrationFeatureSection: FC<IProps> = ({
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
          <ContentContainer title={title}>
            <Content>
              <Text text={desc} />
              {metrics && <FeatureSectionMetricsList metrics={metrics} />}
            </Content>
          </ContentContainer>
        </GeneralContainer>
        <Image src={banner} alt='' />
      </Container>
    </Section>
  );
};

export default LoyaltySystemIntegrationFeatureSection;
