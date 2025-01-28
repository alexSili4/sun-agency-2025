import { FC } from 'react';
import { IProps } from './AtbBusinessMetric.types';
import { Container, Content, Image, Title } from './AtbBusinessMetric.styled';

const AtbBusinessMetric: FC<IProps> = ({ img, title }) => {
  return (
    <Container>
      <Content>
        <Image src={img} />
        <Title dangerouslySetInnerHTML={{ __html: title }}></Title>
      </Content>
    </Container>
  );
};

export default AtbBusinessMetric;
