import { OnInputChangeFunc } from '@/types/functions.types';

export interface IProps {
  name: string;
  label: string;
  value: string;
  isChecked: boolean;
  onChange: OnInputChangeFunc;
}
