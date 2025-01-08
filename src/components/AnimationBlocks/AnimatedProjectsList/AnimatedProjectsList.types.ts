import { Projects } from '@/types/projects.types';
import { RefDivObject } from '@/types/types';

export interface IProps {
  projectsListContainerRef: RefDivObject;
  projectsListContainerInView: boolean;
  servicesSectionInView: boolean;
  projects: Projects;
}
