import {
  ContactsFormErrors,
  ContactsFormInvalidFields,
} from '@/types/contacts.types';

const getContactsFormInvalidFields = (
  errors: ContactsFormErrors
): ContactsFormInvalidFields => {
  if (errors) {
    const invalidFields = Object.keys(errors) as ContactsFormInvalidFields;

    return invalidFields;
  }

  return null;
};

export default getContactsFormInvalidFields;
