import { FeatureMetrics } from '@/types/projects.types';

export interface IProps {
  title: string;
  desc: string;
  banner: string;
  metrics?: FeatureMetrics;
}
