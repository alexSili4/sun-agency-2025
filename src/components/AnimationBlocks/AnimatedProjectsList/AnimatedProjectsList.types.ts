import { Projects } from '@/types/projects.types';
import { RefDivObject } from '@/types/types';

export interface IProps {
  containerRef: RefDivObject;
  containerInView: boolean;
  inView: boolean;
  projects: Projects;
}
