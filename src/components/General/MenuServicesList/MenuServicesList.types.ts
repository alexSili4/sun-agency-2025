import { OnAnchorClickFunc } from '@/types/functions.types';
import { NavLinks } from '@/types/navLinks';
import { NumberOrNull } from '@/types/types';

export interface IProps {
  onClick: OnAnchorClickFunc;
  servicesLinks: NavLinks;
}

export interface IStyledLinksListProps {
  isShowList: boolean;
  scrollHeight: NumberOrNull;
}

export interface IStyledIconWrapProps {
  isShowList: boolean;
}
