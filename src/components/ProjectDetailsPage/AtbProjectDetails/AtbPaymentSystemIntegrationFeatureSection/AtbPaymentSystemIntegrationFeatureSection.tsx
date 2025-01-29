import { FC } from 'react';
import AtbContentContainer from '@AtbProjectDetailsComponents/AtbContentContainer';
import AtbText from '@AtbProjectDetailsComponents/AtbText';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import {
  Container,
  Content,
  Image,
  Section,
} from './AtbPaymentSystemIntegrationFeatureSection.styles';
import { IProps } from './AtbPaymentSystemIntegrationFeatureSection.types';
import AtbFeatureSectionMetricsList from '@AtbProjectDetailsComponents/AtbFeatureSectionMetricsList';
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
              {metrics && (
                <AtbFeatureSectionMetricsList
                  metrics={metrics}
                  maxWidth={146}
                />
              )}
            </Content>
          </AtbContentContainer>
        </GeneralContainer>
        <Image src={banner} />
      </Container>
    </Section>
  );
};

export default AtbPaymentSystemIntegrationFeatureSection;
