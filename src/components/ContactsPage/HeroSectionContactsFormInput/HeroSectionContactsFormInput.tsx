import { FC } from 'react';
import {
  Container,
  Input,
  TextArea,
  Title,
} from './HeroSectionContactsFormInput.styled';
import { IProps } from './HeroSectionContactsFormInput.types';
import HeroSectionContactsFormServices from '@ContactsPageComponents/HeroSectionContactsFormServices';

const HeroSectionContactsFormInput: FC<IProps> = ({
  title,
  placeholder,
  inputRef,
  settings,
  type,
  gapDesk,
  rowLength,
  services,
  isTextArea = false,
  isInvalidField = false,
}) => {
  return (
    <Container gapDesk={gapDesk} rowLength={rowLength} isTextArea={isTextArea}>
      <Title isInvalidField={isInvalidField}>{title}</Title>
      {isTextArea ? (
        <TextArea placeholder={placeholder} {...settings}></TextArea>
      ) : services ? (
        <HeroSectionContactsFormServices
          btnTitle='Оберіть'
          services={services}
        />
      ) : (
        <Input
          isInvalidField={isInvalidField}
          type={type}
          placeholder={placeholder}
          {...settings}
          ref={inputRef}
        />
      )}
    </Container>
  );
};

export default HeroSectionContactsFormInput;
