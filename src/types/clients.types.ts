import { Strings } from './types';

export interface ICompanyClient {
  primaryLogo: string;
  logo: string;
  websiteAddress: string;
  text: string;
  projects: string;
  years: string;
  images: Strings;
}

export type CompanyClients = ICompanyClient[];

export interface ITagDetails {
  value: string;
  label: string;
}

export interface ITags {
  all: ITagDetails;
  retail: ITagDetails;
  beautyAndCare: ITagDetails;
  finances: ITagDetails;
  health: ITagDetails;
  restaurants: ITagDetails;
  fmcg: ITagDetails;
}

export interface IServiceDetails {
  value: string;
  label: string;
}

export interface IServices {}

export interface IClients {
  clients: CompanyClients;
  filters: {
    tags: ITags;
    services: IServices;
    years: Years;
  };
}
