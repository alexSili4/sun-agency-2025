import { ContactsFormErrors, Services } from '@/types/contacts.types';
import {
  SetBooleanFunc,
  SetContactsFormErrorsFunc,
} from '@/types/functions.types';

export interface IProps {
  errorMessages: ContactsFormErrors;
  services: Services;
  gapDesk: number;
  rowLength: number;
  isInvalidNameField: boolean;
  isInvalidPhoneField: boolean;
  isInvalidEmailField: boolean;
  updateErrors: SetContactsFormErrorsFunc;
  updateIsSuccess: SetBooleanFunc;
}

export interface IStyledInputsWrapProps {
  rowGapDesk: number;
}
