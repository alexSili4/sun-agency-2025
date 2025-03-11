import { FC } from 'react';
import { IProps } from './PrinciplesSectionSliderPrincipleDetails.types';
import {
  Container,
  Text,
  Title,
} from './PrinciplesSectionSliderPrincipleDetails.styled';

const PrinciplesSectionSliderPrincipleDetails: FC<IProps> = ({
  text,
  title,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
};

export default PrinciplesSectionSliderPrincipleDetails;
