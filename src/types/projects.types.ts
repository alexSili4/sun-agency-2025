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

export interface IFeatureMetric {
  title: string;
  img: string;
}

export type FeatureMetrics = IFeatureMetric[];

export interface IFeature {
  title: string;
  desc: string;
  banner: string;
  metrics?: FeatureMetrics;
  additionalBanner?: string;
}

export interface IClientTeam {
  title: string;
  team: Strings;
}

export interface ISunAgencyTeamData {
  title: string;
  team: Strings;
}

export interface ISunAgencyTeamDataInfo {
  uiUx: ISunAgencyTeamData;
  content: ISunAgencyTeamData;
  management: ISunAgencyTeamData;
  qa: ISunAgencyTeamData;
  developers: ISunAgencyTeamData;
}

export interface ISunAgencyTeam {
  title: string;
  team: ISunAgencyTeamDataInfo;
}

export interface ITeams {
  client: IClientTeam;
  sunAgency: ISunAgencyTeam;
}

export interface IProjectDetails {
  mainInfo: IMainInfo;
  generalInfo: IGeneralInfo;
  businessMetrics: BusinessMetrics;
  banner1: string;
  technicalTask: ITechnicalTask;
  feature1: IFeature;
  feature2: IFeature;
  feature3: IFeature;
  feature4: IFeature;
  feature5: IFeature;
  funFact: string;
  teams: ITeams;
  websitePreview: object;
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
