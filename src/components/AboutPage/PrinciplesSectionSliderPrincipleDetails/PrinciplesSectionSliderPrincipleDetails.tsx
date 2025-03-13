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
  isActiveSlide,
}) => {
  return (
    <Container isActiveSlide={isActiveSlide}>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
};

export default PrinciplesSectionSliderPrincipleDetails;
