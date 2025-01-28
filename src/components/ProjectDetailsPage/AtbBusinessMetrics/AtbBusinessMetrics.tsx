import { FC } from 'react';
import { IProps } from './AtbBusinessMetrics.types';
import { Container, Content, Image, Title } from './AtbBusinessMetrics.styled';

const AtbBusinessMetrics: FC<IProps> = ({ img, title }) => {
  return (
    <Container>
      <Content>
        <Image src={img} />
        <Title dangerouslySetInnerHTML={{ __html: title }}></Title>
      </Content>
    </Container>
  );
};

export default AtbBusinessMetrics;
