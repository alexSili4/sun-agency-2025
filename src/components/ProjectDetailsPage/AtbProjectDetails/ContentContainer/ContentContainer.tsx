import { FC } from 'react';
import { Container, Content, Title } from './ContentContainer.styled';
import { IProps } from './ContentContainer.types';

const ContentContainer: FC<IProps> = ({ children, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
};

export default ContentContainer;
