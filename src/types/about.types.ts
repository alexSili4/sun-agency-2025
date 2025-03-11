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
  topDesc: number;
  leftDesc: number;
}

export interface IPrinciple {
  title: string;
  text: string;
  img: IImage;
}

export type Principles = IPrinciple[];
