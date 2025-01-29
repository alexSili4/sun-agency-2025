import {
  ElementOrNull,
  Func,
  OnDivClickFunc,
  RefDivObject,
  RefFunc,
  RefLottieObject,
} from './types';

export interface IUseModalWinProps {
  setModalWinState: Func;
  showModalWin: boolean;
}

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

export interface IUseIsHoverOrFocus {
  isHoverOrFocus: boolean;
  onItemFocus: Func;
  onItemBlur: Func;
}

export interface IUseLottieContainerInView {
  containerRef: RefDivObject;
  lottieRef: RefLottieObject;
}
