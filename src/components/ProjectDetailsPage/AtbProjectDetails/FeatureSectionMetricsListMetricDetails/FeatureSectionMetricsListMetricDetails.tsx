import { FC } from 'react';
import { IProps } from './FeatureSectionMetricsListMetricDetails.types';
import {
  Container,
  Content,
  Number,
  Title,
} from './FeatureSectionMetricsListMetricDetails.styled';

const FeatureSectionMetricsListMetricDetails: FC<IProps> = ({
  number,
  title,
  maxWidth,
}) => {
  return (
    <Container>
      <Content>
        <Number>{number}</Number>
        <Title maxWidth={maxWidth}>{title}</Title>
      </Content>
    </Container>
  );
};

export default FeatureSectionMetricsListMetricDetails;
