import { SearchParamsKeys } from '@/constants';
import { Services } from '@/types/clients.types';
import { OnInputChangeFunc } from '@/types/functions.types';

export interface IProps {
  service: string;
  services: Services;
  name: SearchParamsKeys;
  onServiceChange: OnInputChangeFunc;
}
