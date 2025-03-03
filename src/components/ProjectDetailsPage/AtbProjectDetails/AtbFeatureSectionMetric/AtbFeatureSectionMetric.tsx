import { FC } from 'react';
import { IProps } from './AtbFeatureSectionMetric.types';
import {
  Container,
  Content,
  Number,
  Title,
} from './AtbFeatureSectionMetric.styled';

const AtbFeatureSectionMetric: FC<IProps> = ({ number, title, maxWidth }) => {
  return (
    <Container>
      <Content>
        <Number>{number}</Number>
        <Title maxWidth={maxWidth}>{title}</Title>
      </Content>
    </Container>
  );
};

export default AtbFeatureSectionMetric;
