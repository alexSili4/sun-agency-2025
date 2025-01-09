import { Strings } from './types';

export interface IClient {
  primaryLogo: string;
  logo: string;
  websiteAddress: string;
  text: string;
  projects: string;
  years: string;
  images: Strings;
}

export type Clients = IClient[];
