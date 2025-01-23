import { Strings } from './types';

export interface IProjectDetails {}

export interface IProject {
  id: number;
  name: string;
  year: number;
  tags: Strings;
  img: string;
  details: IProjectDetails;
}

export type Projects = IProject[];
