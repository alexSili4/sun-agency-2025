import { PagePaths } from '@/constants';

export interface IProps {
  width: number;
  title: string;
  href: PagePaths;
  animationData: object;
  glowHeight: number;
  glowWidth: number;
  loop?: boolean;
  isHidden?: boolean;
}

export interface IStyledProps {
  width: number;
  isHidden: boolean;
}
