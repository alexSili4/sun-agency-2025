import { Symbols } from '@/constants';
import { ContactsFormErrors } from '@/types/contacts.types';
import { IGetContactFormFieldErrorMessage } from '@/types/functions.types';

const getContactFormFieldErrorMessage = (
  errorMessages: ContactsFormErrors
): IGetContactFormFieldErrorMessage => {
  const nameError = errorMessages?.name?.join(Symbols.break) ?? null;
  const emailError = errorMessages?.email?.join(Symbols.break) ?? null;
  const phoneError = errorMessages?.phone?.join(Symbols.break) ?? null;
  const servicesError = errorMessages?.services?.join(Symbols.break) ?? null;
  const messageError = errorMessages?.message?.join(Symbols.break) ?? null;

  return {
    nameError,
    emailError,
    phoneError,
    servicesError,
    messageError,
  };
};

export default getContactFormFieldErrorMessage;
