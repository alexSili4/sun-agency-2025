import { FC } from 'react';
import AtbContentContainer from '@ProjectDetailsPageComponents/AtbContentContainer';
import AtbText from '@ProjectDetailsPageComponents/AtbText';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import {
  Container,
  Content,
  Image,
  Section,
} from './AtbPaymentSystemIntegrationFeatureSection.styles';
import { IProps } from './AtbPaymentSystemIntegrationFeatureSection.types';
import AtbFeatureSectionMetricsList from '@ProjectDetailsPageComponents/AtbFeatureSectionMetricsList';
import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';

const AtbPaymentSystemIntegrationFeatureSection: FC<IProps> = ({
  title,
  desc,
  banner,
  metrics,
}) => {
  return (
    <Section>
      <Container>
        <HiddenSectionTitle title={title} />
        <GeneralContainer>
          <AtbContentContainer title={title}>
            <Content>
              <AtbText text={desc} />
              <AtbFeatureSectionMetricsList metrics={metrics} />
            </Content>
          </AtbContentContainer>
        </GeneralContainer>
        <Image src={banner} />
      </Container>
    </Section>
  );
};

export default AtbPaymentSystemIntegrationFeatureSection;
