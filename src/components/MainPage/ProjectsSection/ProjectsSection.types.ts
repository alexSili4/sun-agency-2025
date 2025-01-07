import { RefDivObject } from '@/types/types';

export interface IProps {
  projectsSectionGradientRef: RefDivObject;
  shouldShowGradient: boolean;
  projectsListContainerRef: RefDivObject;
  projectsListContainerInView: boolean;
  servicesSectionInView: boolean;
}
