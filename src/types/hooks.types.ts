import { Variants } from 'framer-motion';
import {
  ElementOrNull,
  Func,
  NumberOrNull,
  OnDivClickFunc,
  RefDivObject,
  RefFunc,
  RefLottieObject,
} from './types';
import { OnSwiperAutoplayTimeLeft, OnSwiperFunc } from './functions.types';
import { Process } from './about.types';

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

export interface IUseProcessStepsListAnimationProps {
  containerRef: RefDivObject;
  process: Process;
}

export interface IUseProcessStepsListAnimation {
  currentStep: number;
  textVariants: Variants;
  activePointRotate: number;
}

export interface IUsePrinciplesSlider {
  onSwiper: OnSwiperFunc;
  onAutoplayTimeLeft: OnSwiperAutoplayTimeLeft;
  activeIndex: number;
  size: NumberOrNull;
  progress: number;
}
