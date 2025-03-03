import { FC } from 'react';
import { Container, Content, Title } from './AtbContentContainer.styled';
import { IProps } from './AtbContentContainer.types';

const AtbContentContainer: FC<IProps> = ({ children, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
};

export default AtbContentContainer;
