import { FC, useState } from 'react';
import {
  Background,
  Container,
  Content,
} from './HeroSectionContactsFormContainer.styled';
import HeroSectionContactsForm from '@ContactsPageComponents/HeroSectionContactsForm';
import { StringOrNull } from '@/types/types';
import HeroSectionContactsFormErrorMessage from '@ContactsPageComponents/HeroSectionContactsFormErrorMessage';
import { InvalidContactsFormFields } from '@/types/contacts.types';
import { theme } from '@/constants';
import { IProps } from './HeroSectionContactsFormContainer.types';

const HeroSectionContactsFormContainer: FC<IProps> = ({ services }) => {
  const [error, setError] = useState<StringOrNull>(null);
  const [invalidFields, setInvalidFields] = useState<InvalidContactsFormFields>(
    ['email', 'name', 'phone']
  );
  const [
    ,
    // isSuccess
    setIsSuccess,
  ] = useState<boolean>(false);

  const isInvalidNameField = invalidFields
    ? invalidFields.includes('name')
    : false;
  const isInvalidPhoneField = invalidFields
    ? invalidFields.includes('phone')
    : false;
  const isInvalidEmailField = invalidFields
    ? invalidFields.includes('email')
    : false;

  const updateError = (data: StringOrNull) => {
    setError(data);
  };

  const updateIsSuccess = (data: boolean) => {
    setIsSuccess(data);
  };

  const updateInvalidFields = (data: InvalidContactsFormFields) => {
    setInvalidFields(data);
  };

  return (
    <Container>
      <Background>
        <Content>
          <HeroSectionContactsForm
            isInvalidEmailField={isInvalidEmailField}
            isInvalidNameField={isInvalidNameField}
            isInvalidPhoneField={isInvalidPhoneField}
            updateError={updateError}
            updateInvalidFields={updateInvalidFields}
            updateIsSuccess={updateIsSuccess}
            gapDesk={theme.spacing(8)}
            rowLength={2}
            services={services}
          />
          {error && <HeroSectionContactsFormErrorMessage error={error} />}
        </Content>
      </Background>
    </Container>
  );
};

export default HeroSectionContactsFormContainer;
