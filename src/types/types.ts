import { MouseEvent } from 'react';

// events
export type DivClickEvent = MouseEvent<HTMLDivElement>;

export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

// functions
export type Func = () => void;

export type OnDivClickFunc = (e: DivClickEvent) => void;

// other
export type ElementOrNull = Element | null;
