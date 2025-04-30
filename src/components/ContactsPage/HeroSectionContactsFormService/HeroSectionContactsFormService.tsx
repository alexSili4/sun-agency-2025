import { FC } from 'react';
import { IProps } from './HeroSectionContactsFormService.types';
import {
  Container,
  Input,
  Title,
} from './HeroSectionContactsFormService.styled';

const HeroSectionContactsFormService: FC<IProps> = ({ service, settings }) => {
  return (
    <Container>
      <Title>{service}</Title>
      <Input value={service} type='checkbox' {...settings} />
    </Container>
  );
};

export default HeroSectionContactsFormService;
