import { RefAnchorObject } from '@/types/types';
import { ReactNode } from 'react';

export interface IProps {
  href: string;
  children: ReactNode;
  linkRef?: RefAnchorObject;
  isMaxWidth?: boolean;
}

export interface IStyledLinkProps {
  isMaxWidth: boolean;
}
