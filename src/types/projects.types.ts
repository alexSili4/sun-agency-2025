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

export interface IProjectDetails {
  mainInfo: IMainInfo;
  generalInfo: IGeneralInfo;
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
