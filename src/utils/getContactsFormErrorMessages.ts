import {
  ContactsFormErrorMessages,
  IContactsFormData,
  IContactsFormErrorMessages,
} from '@/types/contacts.types';
import { FieldErrors } from 'react-hook-form';

const getContactsFormErrorMessages = (
  errors: FieldErrors<IContactsFormData>
): IContactsFormErrorMessages => {
  const errorMessages: IContactsFormErrorMessages = {};

  const formErrors = Object.entries(errors) as ContactsFormErrorMessages;

  formErrors.forEach(([key, data]) => {
    const message = data?.message ?? '';

    errorMessages[key] = [message];
  });

  return errorMessages;
};

export default getContactsFormErrorMessages;
