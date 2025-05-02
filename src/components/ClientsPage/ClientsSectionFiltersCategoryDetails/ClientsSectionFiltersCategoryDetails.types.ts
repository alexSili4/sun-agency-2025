import { OnInputChangeFunc } from '@/types/functions.types';

export interface IProps {
  label: string;
  value: string;
  isChecked: boolean;
  onChange: OnInputChangeFunc;
}
