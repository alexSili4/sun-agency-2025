import { Services } from '@/types/contacts.types';
import { InputType } from '@/types/types';

export interface IProps {
  title: string;
  settings: object;
  gapDesk: number;
  rowLength: number;
  btnTitle?: string;
  services?: Services;
  type?: InputType;
  placeholder?: string;
  isTextArea?: boolean;
  isInvalidField?: boolean;
  isDefaultBtnTitle?: boolean;
  phoneInputReplacement?: object;
  phoneInputMask?: string;
}

export interface IStyledContainerProps {
  gapDesk: number;
  rowLength: number;
}

export interface IStyledLabelProps {
  gapDesk: number;
  rowLength: number;
  isTextArea: boolean;
}

export interface IStyledInputProps {
  isInvalidField: boolean;
}

export interface IStyledTitleProps {
  isInvalidField: boolean;
}
