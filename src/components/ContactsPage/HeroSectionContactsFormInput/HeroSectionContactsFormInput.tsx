import { FC } from 'react';
import {
  Label,
  Input,
  TextArea,
  Title,
  Container,
  ServiceBtnWrap,
  StyledInputMask,
} from './HeroSectionContactsFormInput.styled';
import { IProps } from './HeroSectionContactsFormInput.types';
import HeroSectionContactsFormServices from '@ContactsPageComponents/HeroSectionContactsFormServices';
import HeroSectionContactsFormServicesBtn from '@ContactsPageComponents/HeroSectionContactsFormServicesBtn';

const HeroSectionContactsFormInput: FC<IProps> = ({
  title,
  placeholder,
  settings,
  type,
  gapDesk,
  rowLength,
  services,
  btnTitle = '',
  isDefaultBtnTitle = false,
  isTextArea = false,
  isInvalidField = false,
  phoneInputReplacement,
  phoneInputMask,
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
      ) : phoneInputMask ? (
        <StyledInputMask
          isInvalidField={isInvalidField}
          type={type}
          placeholder={placeholder}
          mask={phoneInputMask}
          replacement={phoneInputReplacement}
          {...settings}
        />
      ) : (
        <Input
          isInvalidField={isInvalidField}
          type={type}
          placeholder={placeholder}
          {...settings}
        />
      )}
    </Label>
  );
};

export default HeroSectionContactsFormInput;
