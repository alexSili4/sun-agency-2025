import {
  Employees,
  Metrics,
  Principles,
  Process,
  System,
} from '@/types/about.types';

export interface IProps {
  employees: Employees;
  metrics: Metrics;
  principles: Principles;
  system: System;
  process: Process;
}
