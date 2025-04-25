import { FC } from 'react';
import {
  Container,
  Content,
  Image,
  Section,
} from './PaymentSystemIntegrationFeatureSection.styles';
import { IProps } from './PaymentSystemIntegrationFeatureSection.types';
// ----- components
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import ContentContainer from '@AtbProjectDetailsComponents/ContentContainer';
import Text from '@AtbProjectDetailsComponents/Text';
import FeatureSectionMetricsList from '@AtbProjectDetailsComponents/FeatureSectionMetricsList';
import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';

const PaymentSystemIntegrationFeatureSection: FC<IProps> = ({
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
          <ContentContainer title={title}>
            <Content>
              <Text text={desc} />
              {metrics && (
                <FeatureSectionMetricsList metrics={metrics} maxWidth={146} />
              )}
            </Content>
          </ContentContainer>
        </GeneralContainer>
        <Image src={banner} alt='' />
      </Container>
    </Section>
  );
};

export default PaymentSystemIntegrationFeatureSection;
