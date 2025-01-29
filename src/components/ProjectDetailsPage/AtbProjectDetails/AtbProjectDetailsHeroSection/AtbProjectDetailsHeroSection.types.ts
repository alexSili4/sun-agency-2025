import { Strings } from '@/types/types';

export interface IProps {
  name: string;
  tags: Strings;
  title: string;
  primaryBanner: string;
  borderRadius: number;
}

export interface IStyledBackgroundProps {
  borderRadius: number;
}
