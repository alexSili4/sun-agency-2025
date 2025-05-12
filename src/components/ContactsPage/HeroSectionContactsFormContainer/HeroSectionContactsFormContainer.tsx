import { FC, useState } from 'react';
import {
  Background,
  Container,
  Content,
} from './HeroSectionContactsFormContainer.styled';
import HeroSectionContactsForm from '@ContactsPageComponents/HeroSectionContactsForm';
import { ContactsFormErrors } from '@/types/contacts.types';
import { theme } from '@/constants';
import { IProps } from './HeroSectionContactsFormContainer.types';
import { getContactsFormInvalidFields } from '@/utils';

const HeroSectionContactsFormContainer: FC<IProps> = ({ services }) => {
  const [errors, setErrors] = useState<ContactsFormErrors>(null);
  const [
    ,
    // isSuccess
    setIsSuccess,
  ] = useState<boolean>(false);

  const invalidFields = getContactsFormInvalidFields(errors);

  const isInvalidNameField = invalidFields
    ? invalidFields.includes('name')
    : false;
  const isInvalidPhoneField = invalidFields
    ? invalidFields.includes('phone')
    : false;
  const isInvalidEmailField = invalidFields
    ? invalidFields.includes('email')
    : false;

  const updateErrors = (data: ContactsFormErrors) => {
    setErrors(data);
  };

  const updateIsSuccess = (data: boolean) => {
    setIsSuccess(data);
  };

  return (
    <Container>
      <Background>
        <Content>
          <HeroSectionContactsForm
            errorMessages={errors}
            isInvalidEmailField={isInvalidEmailField}
            isInvalidNameField={isInvalidNameField}
            isInvalidPhoneField={isInvalidPhoneField}
            updateErrors={updateErrors}
            updateIsSuccess={updateIsSuccess}
            gapDesk={theme.spacing(8)}
            rowLength={2}
            services={services}
          />
        </Content>
      </Background>
    </Container>
  );
};

export default HeroSectionContactsFormContainer;
