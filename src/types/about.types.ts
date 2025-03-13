export interface IEmployee {
  name: string;
  jobTitle: string;
  avatar: string;
}

export type Employees = IEmployee[];

export interface IMetric {
  name: string;
  number: string;
}

export type Metrics = IMetric[];

export interface IAbout {
  metrics: Metrics;
  employees: Employees;
  principles: Principles;
}

export interface IImage {
  img: string;
  topDesk: number;
  leftDesk: number;
}

export interface IMarker {
  topDesk: number;
  leftDesk: number;
}

export interface IPrinciple {
  title: string;
  text: string;
  img: IImage;
  marker: IMarker;
}

export type Principles = IPrinciple[];
