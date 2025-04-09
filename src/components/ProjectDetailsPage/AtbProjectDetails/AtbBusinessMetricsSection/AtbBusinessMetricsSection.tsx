import { FC } from 'react';
import { IProps } from './AtbBusinessMetricsSection.types';
import {
  Container,
  Content,
  Section,
  Banner,
} from './AtbBusinessMetricsSection.styled';
// ----- components
import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import AtbBusinessMetricsList from '@AtbProjectDetailsComponents/AtbBusinessMetricsList';
import GeneralContainer from '@GeneralComponents/GeneralContainer';

const AtbBusinessMetricsSection: FC<IProps> = ({ businessMetrics, banner }) => {
  return (
    <Section>
      <Container>
        <GeneralContainer>
          <Content>
            <HiddenSectionTitle title='Показники бізнесу АТБ' />
            <AtbBusinessMetricsList businessMetrics={businessMetrics} />
          </Content>
        </GeneralContainer>
        <Banner src={banner} alt='' />
      </Container>
    </Section>
  );
};

export default AtbBusinessMetricsSection;
