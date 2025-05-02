import { SearchParamsKeys } from '@/constants';
import { OnInputChangeFunc } from '@/types/functions.types';

export interface IProps {
  label: string;
  value: string;
  name: SearchParamsKeys;
  isChecked: boolean;
  onChange: OnInputChangeFunc;
}
