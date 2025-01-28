import { Strings } from './types';

export interface IGeneralInfo {
  desc: string;
  timeline: string;
  client: string;
  websiteAddress: string;
}

export interface IMainInfo {
  name: string;
  tags: Strings;
  title: string;
  primaryBanner: string;
}

export interface IBusinessMetrics {
  title: string;
  img: string;
}

export type BusinessMetrics = IBusinessMetrics[];

export interface ITechnicalTask {
  desc: string;
  services: Strings;
  preview: object;
}

export interface IProjectDetails {
  mainInfo: IMainInfo;
  generalInfo: IGeneralInfo;
  businessMetrics: BusinessMetrics;
  banner1: string;
  technicalTask: ITechnicalTask;
}

export interface IProject {
  id: number;
  name: string;
  year: number;
  tags: Strings;
  img: string;
  details: IProjectDetails;
}

export type Projects = IProject[];
