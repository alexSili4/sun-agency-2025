import { CompanyClients, Filters } from './clients.types';
import { ContactsFormErrors } from './contacts.types';
import {
  AnchorClickEvent,
  AnyElements,
  BtnClickEvent,
  DivClickEvent,
  InputChangeEvent,
  ISwiper,
  StringOrNull,
} from './types';

export type Func = () => void;

export type OnDivClickFunc = (e: DivClickEvent) => void;

export type OnInputChangeFunc = (e: InputChangeEvent) => void;

export type OnAnchorClickFunc = (e: AnchorClickEvent) => void;

export type OnBtnClickFunc = (e: BtnClickEvent) => void;

export type SetBooleanFunc = (data: boolean) => void;

export type SetStringOrNullFunc = (data: StringOrNull) => void;

export type SetContactsFormErrorsFunc = (data: ContactsFormErrors) => void;

export interface IGetIsLastIndexProps {
  index: number;
  array: Array<any>;
}

export interface ISplitArray {
  firstItem: AnyElements;
  secondItem: AnyElements;
}

export interface ISmoothScrollProps {
  id: string;
  block?: 'nearest' | 'start' | 'center';
}

export interface IGetFlexItemWidthProps {
  listLength: number;
  listGap: number;
}

export interface IGetCurrentOpacity {
  value: number;
  index: number;
}

export interface IPadStartProps {
  value: string | number;
  maxLength: number;
  addSymbol: string;
}

export type OnSwiperFunc = (swiper: ISwiper) => void;

export type OnSwiperAutoplayTimeLeft = (
  swiper: ISwiper,
  number: number,
  time: number
) => void;

export interface IGetContactsFormServicesBtnTitle {
  isDefaultBtnTitle: boolean;
  btnTitle: string;
}

export interface IGetClientsFilterBtnTitleProps {
  filters: Filters;
  filter: string;
}

export interface IFilterClientsByCategoryProps {
  clients: CompanyClients;
  category: string;
}

export interface IFilterClientsByYearProps {
  clients: CompanyClients;
  year: string;
}

export interface IFilterClientsByServiceProps {
  clients: CompanyClients;
  service: string;
}

export interface IGetContactFormFieldErrorMessage {
  nameError: StringOrNull;
  emailError: StringOrNull;
  phoneError: StringOrNull;
  servicesError: StringOrNull;
  messageError: StringOrNull;
}
