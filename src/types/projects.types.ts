import { Reviews } from './reviews.types';
import { Strings } from './types';

export interface IImage {
  mobile: string;
  desk: string;
}

export interface IGeneralInfo {
  desc: string;
  timeline: string;
  client: string;
  websiteAddress: string;
  fullWebsiteAddress: string;
}

export interface IMainInfo {
  name: string;
  tags: Strings;
  title: string;
  primaryBanner: IImage;
}

export interface IBusinessMetrics {
  title: string;
  number: string;
}

export type BusinessMetrics = IBusinessMetrics[];

export interface ITechnicalTask {
  desc: string;
  services: Strings;
  preview: object;
}

export interface IFeatureMetric {
  title: string;
  number: string;
}

export type FeatureMetrics = IFeatureMetric[];

export interface IFeature {
  title: string;
  desc: string;
  banner: IImage;
  metrics?: FeatureMetrics;
  additionalBanner?: IImage;
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
  banner1: IImage;
  technicalTask: ITechnicalTask;
  feature1: IFeature;
  feature2: IFeature;
  feature3: IFeature;
  feature4: IFeature;
  feature5: IFeature;
  funFact: string;
  teams: ITeams;
  websitePreview: object;
  reviews: Reviews;
}

export interface IProjectImg {
  mob: string;
  desk: string;
}

export interface IProject {
  id: number;
  name: string;
  year: number;
  tags: Strings;
  img: IProjectImg;
  details: IProjectDetails;
}

export type Projects = IProject[];
