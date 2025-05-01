import { Services } from '@/types/contacts.types';
import {
  SetBooleanFunc,
  SetStringOrNullFunc,
  SetInvalidContactsFormFieldsFunc,
} from '@/types/functions.types';

export interface IProps {
  services: Services;
  gapDesk: number;
  rowLength: number;
  isInvalidNameField: boolean;
  isInvalidPhoneField: boolean;
  isInvalidEmailField: boolean;
  updateError: SetStringOrNullFunc;
  updateIsSuccess: SetBooleanFunc;
  updateInvalidFields: SetInvalidContactsFormFieldsFunc;
}

export interface IStyledInputsWrapProps {
  rowGapDesk: number;
}
