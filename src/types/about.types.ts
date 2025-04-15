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

export interface IPrincipleImage {
  img: string;
  topDesk: number;
  leftDesk: number;
}

export interface IPrincipleMarker {
  topDesk: number;
  leftDesk: number;
}

export interface IPrinciple {
  title: string;
  text: string;
  img: IPrincipleImage;
  marker: IPrincipleMarker;
}

export type Principles = IPrinciple[];

export interface ISystemPointLeaderLine {
  imgDesk: string;
  imgMob: string;
  topMob?: number;
  leftMob?: number;
  bottomMob?: number;
  rightMob?: number;
  topDesk?: number;
  leftDesk?: number;
  bottomDesk?: number;
  rightDesk?: number;
  widthDesk: number;
  heightDesk: number;
  widthMob: number;
  heightMob: number;
}

export interface ISystemPointDesc {
  text: string;
  paddingTopMob?: number;
  paddingBottomMob?: number;
  paddingRightMob?: number;
  paddingLeftMob?: number;
  paddingTopDesk?: number;
  paddingBottomDesk?: number;
  paddingRightDesk?: number;
  paddingLeftDesk?: number;
  topMob?: number;
  bottomMob?: number;
  rightMob?: number;
  leftMob?: number;
  topDesk?: number;
  bottomDesk?: number;
  rightDesk?: number;
  leftDesk?: number;
  leaderLine: ISystemPointLeaderLine;
}

export interface ISystemPoint {
  topMob: number;
  leftMob: number;
  topDesk: number;
  leftDesk: number;
  desc: ISystemPointDesc;
}

export interface ISystemImg {
  img: string;
  topMob?: number;
  leftMob?: number;
  rightMob?: number;
  bottomMob?: number;
  topDesk?: number;
  leftDesk?: number;
  rightDesk?: number;
  bottomDesk?: number;
  sizeMob: number;
  sizeDesk: number;
}

export interface ISystemItem {
  point: ISystemPoint;
  img?: ISystemImg;
}

export type System = ISystemItem[];

export interface IProcessStep {
  text: string;
  img: string;
}

export type Process = IProcessStep[];

export interface IAbout {
  metrics: Metrics;
  employees: Employees;
  principles: Principles;
  system: System;
  process: Process;
}
