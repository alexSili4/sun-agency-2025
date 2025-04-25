import { FC } from 'react';
import {
  Container,
  Marker,
  Service,
} from './TechnicalTaskSectionServiceDetails.styled';
import { IProps } from './TechnicalTaskSectionServiceDetails.types';

const TechnicalTaskSectionServiceDetails: FC<IProps> = ({ service }) => {
  return (
    <Container>
      <Marker></Marker>
      <Service>{service}</Service>
    </Container>
  );
};

export default TechnicalTaskSectionServiceDetails;
