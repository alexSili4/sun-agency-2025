import { FC } from 'react';
import { Container, Marker, Service } from './AtbTechnicalTaskService.styled';
import { IProps } from './AtbTechnicalTaskService.types';

const AtbTechnicalTaskService: FC<IProps> = ({ service }) => {
  return (
    <Container>
      <Marker></Marker>
      <Service>{service}</Service>
    </Container>
  );
};

export default AtbTechnicalTaskService;
