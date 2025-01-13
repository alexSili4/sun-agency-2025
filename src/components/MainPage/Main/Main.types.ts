import { RefDivObject } from '@/types/types';

export interface IProps {
  projectsSectionBgRef: RefDivObject;
  servicesSectionRef: RefDivObject;
  projectsListContainerRef: RefDivObject;
  shouldShowProjectsSectionBg: boolean;
  projectsListContainerInView: boolean;
  servicesSectionInView: boolean;
  shouldShowClientsSectionBg: boolean;
  reviewsSectionRef: RefDivObject;
  clientsSectionBgRef: RefDivObject;
}
