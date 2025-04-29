import {
  SetBooleanFunc,
  SetStringOrNullFunc,
  SetInvalidContactsFormFieldsFunc,
} from '@/types/functions.types';
import { Strings } from '@/types/types';

export interface IProps {
  services: Strings;
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
