import { OnAnchorClickFunc, OnInputChangeFunc } from '@/types/types';

export interface IProps {
  currentLang: string;
  onClick: OnAnchorClickFunc;
  onChange: OnInputChangeFunc;
}
