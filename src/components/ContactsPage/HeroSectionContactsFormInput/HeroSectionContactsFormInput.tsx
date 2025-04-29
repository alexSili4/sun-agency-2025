import { FC } from 'react';
import {
  Container,
  Input,
  TextArea,
  Title,
} from './HeroSectionContactsFormInput.styled';
import { IProps } from './HeroSectionContactsFormInput.types';

const HeroSectionContactsFormInput: FC<IProps> = ({ title, isTextArea }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {isTextArea ? <TextArea></TextArea> : <Input />}
    </Container>
  );
};

export default HeroSectionContactsFormInput;
