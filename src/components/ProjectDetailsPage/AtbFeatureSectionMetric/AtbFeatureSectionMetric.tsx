import { FC } from 'react';
import { IProps } from './AtbFeatureSectionMetric.types';
import {
  Container,
  Content,
  Image,
  Title,
} from './AtbFeatureSectionMetric.styled';

const AtbFeatureSectionMetric: FC<IProps> = ({ img, title }) => {
  return (
    <Container>
      <Content>
        <Image src={img} />
        <Title dangerouslySetInnerHTML={{ __html: title }}></Title>
      </Content>
    </Container>
  );
};

export default AtbFeatureSectionMetric;
