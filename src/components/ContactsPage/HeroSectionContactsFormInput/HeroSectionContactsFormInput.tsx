import { FC } from 'react';
import {
  Label,
  Input,
  TextArea,
  Title,
  Container,
  ServiceBtnWrap,
} from './HeroSectionContactsFormInput.styled';
import { IProps } from './HeroSectionContactsFormInput.types';
import HeroSectionContactsFormServices from '@ContactsPageComponents/HeroSectionContactsFormServices';
import HeroSectionContactsFormServicesBtn from '@ContactsPageComponents/HeroSectionContactsFormServicesBtn';

const HeroSectionContactsFormInput: FC<IProps> = ({
  title,
  placeholder,
  inputRef,
  settings,
  type,
  gapDesk,
  rowLength,
  services,
  btnTitle = '',
  isDefaultBtnTitle = false,
  isTextArea = false,
  isInvalidField = false,
}) => {
  return services ? (
    <Container gapDesk={gapDesk} rowLength={rowLength}>
      <Title isInvalidField={isInvalidField}>{title}</Title>
      <ServiceBtnWrap>
        <HeroSectionContactsFormServicesBtn isFake />
        <HeroSectionContactsFormServices
          btnTitle={btnTitle}
          isDefaultBtnTitle={isDefaultBtnTitle}
          services={services}
          settings={settings}
        />
      </ServiceBtnWrap>
    </Container>
  ) : (
    <Label gapDesk={gapDesk} rowLength={rowLength} isTextArea={isTextArea}>
      <Title isInvalidField={isInvalidField}>{title}</Title>
      {isTextArea ? (
        <TextArea placeholder={placeholder} {...settings}></TextArea>
      ) : (
        <Input
          isInvalidField={isInvalidField}
          type={type}
          placeholder={placeholder}
          {...settings}
          ref={inputRef}
        />
      )}
    </Label>
  );
};

export default HeroSectionContactsFormInput;
