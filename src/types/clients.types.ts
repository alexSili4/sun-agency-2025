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

export interface ICategoryDetails {
  value: string;
  label: string;
}

export type Categories = ICategoryDetails[];

export interface ICategories {
  all: ICategoryDetails;
  retail: ICategoryDetails;
  beautyAndCare: ICategoryDetails;
  finances: ICategoryDetails;
  health: ICategoryDetails;
  restaurants: ICategoryDetails;
  fmcg: ICategoryDetails;
}

export interface IServiceDetails {
  value: string;
  label: string;
}

export interface IServices {}

export interface IYears {
  2011: string;
  2012: string;
  2013: string;
  2014: string;
  2015: string;
  2016: string;
  2017: string;
  2018: string;
  2019: string;
  2020: string;
  2021: string;
  2022: string;
  2023: string;
  2024: string;
  2025: string;
  2026: string;
  2027: string;
  2028: string;
}

export interface IFilters {
  categories: ICategories;
  services: IServices;
  years: IYears;
}

export interface IClients {
  clients: CompanyClients;
  filters: IFilters;
}
