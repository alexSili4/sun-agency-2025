import { ChangeEvent, MouseEvent } from 'react';

// events
export type DivClickEvent = MouseEvent<HTMLDivElement>;

export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

// functions
export type Func = () => void;

export type OnDivClickFunc = (e: DivClickEvent) => void;

export type OnInputChangeFunc = (e: InputChangeEvent) => void;

// other
export type ElementOrNull = Element | null;

export type Strings = string[];
