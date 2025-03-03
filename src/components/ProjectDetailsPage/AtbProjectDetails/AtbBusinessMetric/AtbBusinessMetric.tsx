import { FC } from 'react';
import { IProps } from './AtbBusinessMetric.types';
import { Container, Content, Number, Title } from './AtbBusinessMetric.styled';

const AtbBusinessMetric: FC<IProps> = ({ number, title }) => {
  return (
    <Container>
      <Content>
        <Number>{number}</Number>
        <Title dangerouslySetInnerHTML={{ __html: title }}></Title>
      </Content>
    </Container>
  );
};

export default AtbBusinessMetric;
