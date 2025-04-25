import { FC } from 'react';
import { IProps } from './BusinessMetricsSection.types';
import {
  Container,
  Content,
  Section,
  Banner,
} from './BusinessMetricsSection.styled';
// ----- components
import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import BusinessMetricsSectionList from '@AtbProjectDetailsComponents/BusinessMetricsSectionList';
import GeneralContainer from '@GeneralComponents/GeneralContainer';

const BusinessMetricsSection: FC<IProps> = ({ businessMetrics, banner }) => {
  return (
    <Section>
      <Container>
        <GeneralContainer>
          <Content>
            <HiddenSectionTitle title='Показники бізнесу АТБ' />
            <BusinessMetricsSectionList businessMetrics={businessMetrics} />
          </Content>
        </GeneralContainer>
        <Banner src={banner} alt='' />
      </Container>
    </Section>
  );
};

export default BusinessMetricsSection;
