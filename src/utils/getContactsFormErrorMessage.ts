import {
  ContactsFormErrorMessages,
  ContactsFormErrors,
  IContactsFormData,
} from '@/types/contacts.types';
import { FieldErrors } from 'react-hook-form';

const getContactsFormErrorMessage = (
  errors: FieldErrors<IContactsFormData>
): ContactsFormErrorMessages => {
  const formErrors = Object.entries(errors) as ContactsFormErrors;

  const errorMessages = formErrors.map(([key, value]) => {
    const message = value?.message ?? '';

    return {
      field: key,
      message,
    };
  });

  return errorMessages;
};

export default getContactsFormErrorMessage;
