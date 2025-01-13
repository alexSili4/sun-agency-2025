import { RefDivObject } from '@/types/types';

export interface IProps {
  shouldShowSectionBg: boolean;
  sectionBgRef: RefDivObject;
  containerRef: RefDivObject;
  containerInView: boolean;
  inView: boolean;
}
