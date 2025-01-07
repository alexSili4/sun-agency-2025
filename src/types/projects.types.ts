import { Strings } from './types';

export interface IProject {
  id: number;
  name: string;
  year: number;
  tags: Strings;
  img: string;
}

export type Projects = IProject[];
