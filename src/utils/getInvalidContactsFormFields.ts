import { Symbols } from '@/constants';
import {
  ContactsFormErrorMessages,
  IContactsFormErrorMessage,
} from '@/types/contacts.types';
import { IGetInvalidContactsFormFields } from '@/types/functions.types';

const getInvalidContactsFormFields = (
  errors: ContactsFormErrorMessages
): IGetInvalidContactsFormFields => {
  const errorMessage = errors
    .map(({ message }: IContactsFormErrorMessage) => message)
    .join(Symbols.break);
  const invalidFields = errors.map(
    ({ field }: IContactsFormErrorMessage) => field
  );

  return { errorMessage, invalidFields };
};

export default getInvalidContactsFormFields;
