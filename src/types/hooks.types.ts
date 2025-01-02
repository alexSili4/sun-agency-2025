import { ElementOrNull, OnDivClickFunc, RefDivObject, RefFunc } from './types';

export interface IUseModalWin {
  modalRoot: ElementOrNull;
  hideModalWin: OnDivClickFunc;
}

export interface IUseIsScrollingUpProps {
  element: RefDivObject;
}

export interface IUseIsScrollingUp {
  isScrollingUp: boolean;
  isScrolling: boolean;
}

export interface IUseScrollPercentage {
  ref: RefFunc;
  percentage: number;
}
