import { InputType, RefInputObject, Strings } from '@/types/types';

export interface IProps {
  title: string;
  settings: object;
  gapDesk: number;
  rowLength: number;
  services?: Strings;
  type?: InputType;
  placeholder?: string;
  isTextArea?: boolean;
  inputRef?: RefInputObject;
  isInvalidField?: boolean;
}

export interface IStyledContainerProps {
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
