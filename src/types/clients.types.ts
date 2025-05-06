import { Strings } from './types';

export interface IFilterDetails {
  value: string;
  label: string;
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

export type IYearsItem = IYears[keyof IYears];

export type CompanyClientYears = IYearsItem[];

export interface IServices {
  [key: string]: IFilterDetails;
  all: IFilterDetails;
  eCommerce: IFilterDetails;
  webDev: IFilterDetails;
  applications: IFilterDetails;
  brandingAndIdentity: IFilterDetails;
  digitalization: IFilterDetails;
}

export type IServicesItem = IServices[keyof IServices];

export type CompanyClientServices = IServicesItem[];

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

export type ICategoriesItem = ICategories[keyof ICategories];

export type CompanyClientCategories = ICategoriesItem[];

export interface ICompanyClientFilters {
  years: CompanyClientYears;
  services: CompanyClientServices;
  categories: CompanyClientCategories;
}

export interface ICompanyClient {
  id: string;
  primaryLogo: string;
  logo: string;
  websiteAddress: string;
  text: string;
  generalInfo: { projects: string; years: string };
  images: Strings;
  filters: ICompanyClientFilters;
}

export type CompanyClients = ICompanyClient[];

export interface IClientsFilters {
  categories: ICategories;
  services: IServices;
  years: IYears;
}

export interface IClients {
  clients: CompanyClients;
  filters: IClientsFilters;
}

export interface IFilters {
  [key: string]: IFilterDetails;
}

export type Filters = IFilterDetails[];
