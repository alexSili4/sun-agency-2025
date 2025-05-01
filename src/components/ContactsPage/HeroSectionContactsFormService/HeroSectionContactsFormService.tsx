import { FC } from 'react';
import { IProps } from './HeroSectionContactsFormService.types';
import {
  Container,
  Input,
  Title,
} from './HeroSectionContactsFormService.styled';

const HeroSectionContactsFormService: FC<IProps> = ({
  value,
  settings,
  label,
}) => {
  return (
    <Container>
      <Title>{label}</Title>
      <Input value={value} type='checkbox' {...settings} />
    </Container>
  );
};

export default HeroSectionContactsFormService;
