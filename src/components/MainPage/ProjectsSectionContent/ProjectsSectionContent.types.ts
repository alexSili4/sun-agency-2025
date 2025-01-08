import { RefDivObject } from '@/types/types';

export interface IProps {
  shouldShowGradient: boolean;
  projectsSectionGradientRef: RefDivObject;
  projectsListContainerRef: RefDivObject;
  projectsListContainerInView: boolean;
  servicesSectionInView: boolean;
}
