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

export interface IFilterDetails {
  value: string;
  label: string;
}

export interface IFilters {
  [key: string]: IFilterDetails;
}

export interface ICategories {
  [key: string]: IFilterDetails;
  all: IFilterDetails;
  retail: IFilterDetails;
  beautyAndCare: IFilterDetails;
  finances: IFilterDetails;
  health: IFilterDetails;
  restaurants: IFilterDetails;
  fmcg: IFilterDetails;
}

export type Filters = IFilterDetails[];

export interface IServices {
  [key: string]: IFilterDetails;
  all: IFilterDetails;
  eCommerce: IFilterDetails;
  webDev: IFilterDetails;
  applications: IFilterDetails;
  brandingAndIdentity: IFilterDetails;
  digitalization: IFilterDetails;
}

export interface IYears {
  [key: string]: IFilterDetails;
  all: IFilterDetails;
  year2011: IFilterDetails;
  year2012: IFilterDetails;
  year2013: IFilterDetails;
  year2014: IFilterDetails;
  year2015: IFilterDetails;
  year2016: IFilterDetails;
  year2017: IFilterDetails;
  year2018: IFilterDetails;
  year2019: IFilterDetails;
  year2020: IFilterDetails;
  year2021: IFilterDetails;
  year2022: IFilterDetails;
  year2023: IFilterDetails;
  year2024: IFilterDetails;
  year2025: IFilterDetails;
  year2026: IFilterDetails;
  year2027: IFilterDetails;
  year2028: IFilterDetails;
}

export interface IClientsFilters {
  categories: ICategories;
  services: IServices;
  years: IYears;
}

export interface IClients {
  clients: CompanyClients;
  filters: IClientsFilters;
}
