import { FC } from 'react';
import { IProps } from './BusinessMetricsSectionBusinessMetricDetails.types';
import {
  Container,
  Content,
  Number,
  Title,
} from './BusinessMetricsSectionBusinessMetricDetails.styled';

const BusinessMetricsSectionBusinessMetricDetails: FC<IProps> = ({
  number,
  title,
}) => {
  return (
    <Container>
      <Content>
        <Number>{number}</Number>
        <Title dangerouslySetInnerHTML={{ __html: title }}></Title>
      </Content>
    </Container>
  );
};

export default BusinessMetricsSectionBusinessMetricDetails;
