import { MotionValue } from 'framer-motion';
import { LottieRefCurrentProps } from 'lottie-react';
import { ChangeEvent, MouseEvent, RefObject } from 'react';

// events
export type GlobalUIEvent = globalThis.UIEvent;

export type DivClickEvent = MouseEvent<HTMLDivElement>;

export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

export type AnchorClickEvent = MouseEvent<HTMLAnchorElement>;

// functions
export type Func = () => void;

export type OnDivClickFunc = (e: DivClickEvent) => void;

export type OnInputChangeFunc = (e: InputChangeEvent) => void;

export type OnAnchorClickFunc = (e: AnchorClickEvent) => void;

export type OnBtnClickFunc = (e: BtnClickEvent) => void;

export type SetBooleanFunc = (data: boolean) => void;

// refs
export type RefFunc = (node?: Element | null | undefined) => void;

export type RefDivObject = RefObject<HTMLDivElement>;

export type RefListObject = RefObject<HTMLUListElement>;

export type RefLottieObject = RefObject<LottieRefCurrentProps>;

// other
export type ElementOrNull = Element | null;

export type Strings = string[];

export type AnyElements = any[];

export type MotionValueNumber = MotionValue<number>;

export type StringOrNull = string | null;

export type NumberOrNull = number | null;

export type MarqueeDirection = 'right' | 'left';
