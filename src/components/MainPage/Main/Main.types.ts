import { RefDivObject } from '@/types/types';

export interface IProps {
  projectsSectionBgRef: RefDivObject;
  servicesSectionRef: RefDivObject;
  projectsListContainerRef: RefDivObject;
  shouldShowProjectsSectionBg: boolean;
  projectsListContainerInView: boolean;
  servicesSectionInView: boolean;
  shouldShowClientsSectionContent: boolean;
  reviewsSectionRef: RefDivObject;
  clientsSectionRef: RefDivObject;
}
