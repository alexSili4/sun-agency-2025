import { RefDivObject } from '@/types/types';

export interface IProps {
  projectsSectionGradientRef: RefDivObject;
  servicesSectionRef: RefDivObject;
  projectsListContainerRef: RefDivObject;
  shouldShowGradient: boolean;
  projectsListContainerInView: boolean;
  servicesSectionInView: boolean;
}
