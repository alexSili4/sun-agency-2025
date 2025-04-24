import {
  Employees,
  Metrics,
  Principles,
  Process,
  System,
} from '@/types/about.types';
import { RefDivObject } from '@/types/types';

export interface IProps {
  employees: Employees;
  metrics: Metrics;
  principles: Principles;
  system: System;
  process: Process;
  activePointTranslateY: number;
  principlesSliderBgRef: RefDivObject;
  processImgContainerRef: RefDivObject;
  principlesSectionRef: RefDivObject;
}
