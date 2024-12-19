import { OnInputChangeFunc } from '@/types/types';

export interface IProps {
  value: string;
  onChange: OnInputChangeFunc;
  checked: boolean;
}
