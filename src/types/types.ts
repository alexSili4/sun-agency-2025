import { MotionValue } from 'framer-motion';
import { LottieRefCurrentProps } from 'lottie-react';
import { ChangeEvent, MouseEvent, RefObject } from 'react';
import Swiper from 'swiper';

// events
export type GlobalUIEvent = globalThis.UIEvent;

export type DivClickEvent = MouseEvent<HTMLDivElement>;

export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

export type AnchorClickEvent = MouseEvent<HTMLAnchorElement>;

// refs
export type RefFunc = (node?: Element | null | undefined) => void;

export type RefAnchorObject = RefObject<HTMLAnchorElement>;

export type RefDivObject = RefObject<HTMLDivElement>;

export type RefInputObject = RefObject<HTMLInputElement>;

export type RefListObject = RefObject<HTMLUListElement>;

export type RefLottieObject = RefObject<LottieRefCurrentProps>;

// other
export type ElementOrNull = Element | null;

export type Strings = string[];

export type Numbers = number[];

export type AnyElements = any[];

export type MotionValueNumber = MotionValue<number>;

export type MotionValueBoolean = MotionValue<boolean>;

export type StringsOrNull = Strings | null;

export type StringOrNull = string | null;

export type NumberOrNull = number | null;

export type NumberOrUndefined = number | undefined;

export type MarqueeDirection = 'right' | 'left';

export type ISwiper = Swiper;

export type InputType = 'text' | 'email' | 'tel';

export interface IRegExp {
  email: RegExp;
}
