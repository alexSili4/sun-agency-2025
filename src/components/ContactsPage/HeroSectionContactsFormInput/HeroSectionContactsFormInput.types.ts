import { InputType, Strings } from '@/types/types';

export interface IProps {
  title: string;
  settings: object;
  gapDesk: number;
  rowLength: number;
  btnTitle?: string;
  services?: Strings;
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
