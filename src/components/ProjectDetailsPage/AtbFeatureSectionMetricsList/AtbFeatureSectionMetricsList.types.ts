import { FeatureMetrics } from '@/types/projects.types';

export interface IProps {
  metrics: FeatureMetrics;
  maxWidth?: number;
}

export interface IStyledListItemProps {
  metrics: number;
}
