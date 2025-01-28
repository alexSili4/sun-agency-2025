import HiddenSectionTitle from '@/components/General/HiddenSectionTitle';
import { FC } from 'react';
import AtbBusinessMetricsList from '@ProjectDetailsPageComponents/AtbBusinessMetricsList';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { IProps } from './AtbBusinessMetricsSection.types';
import {
  Container,
  Content,
  Section,
  Banner,
} from './AtbBusinessMetricsSection.styled';

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
        <Banner src={banner} />
      </Container>
    </Section>
  );
};

export default AtbBusinessMetricsSection;
