import { Strings } from './types';

export interface IProjectDetails {
  name: string;
  tags: Strings;
  title: string;
  primaryBanner: string;
  firstBanner: string;
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
