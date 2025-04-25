import { FeatureMetrics } from '@/types/projects.types';

export interface IProps {
  desc: string;
  title: string;
  banner: string;
  metrics?: FeatureMetrics;
}
