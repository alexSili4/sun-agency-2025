import { Strings } from './types';

export interface IService {
  path: string;
  title: string;
  icon: string;
  tags: Strings;
}

export type Services = IService[];
