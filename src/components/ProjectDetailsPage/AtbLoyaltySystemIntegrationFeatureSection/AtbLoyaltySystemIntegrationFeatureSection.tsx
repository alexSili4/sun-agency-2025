import { FC } from 'react';
import { IProps } from './AtbLoyaltySystemIntegrationFeatureSection.types';
import AtbFeatureSectionMetricsList from '@ProjectDetailsPageComponents/AtbFeatureSectionMetricsList';
import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import AtbContentContainer from '@ProjectDetailsPageComponents/AtbContentContainer';
import AtbText from '@ProjectDetailsPageComponents/AtbText';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import {
  Container,
  Content,
  Image,
  Section,
} from './AtbLoyaltySystemIntegrationFeatureSection.styled';

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
        <Image src={banner} />
      </Container>
    </Section>
  );
};

export default AtbLoyaltySystemIntegrationFeatureSection;
