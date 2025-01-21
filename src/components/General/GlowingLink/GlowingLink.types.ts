import { PagePaths } from '@/constants';

export interface IProps {
  width: number;
  title: string;
  href: PagePaths;
  animationData: object;
  glowHeight: number;
  glowWidth: number;
  loop?: boolean;
}

export interface IStyledProps {
  width: number;
}
