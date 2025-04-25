import { Strings } from '@/types/types';

export interface IProps {
  name: string;
  tags: Strings;
  title: string;
  primaryBanner: string;
  borderRadiusDesk: number;
  borderRadiusMobile: number;
}

export interface IStyledBackgroundProps {
  borderRadiusDesk: number;
  borderRadiusMobile: number;
}
