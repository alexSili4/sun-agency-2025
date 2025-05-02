import { FieldError } from 'react-hook-form';
import { Strings } from './types';

export interface IPhone {
  number: string;
  tg?: string;
  isViber?: boolean;
}

export type Phone = IPhone[];

export interface IAddress {
  text: string;
  link: string;
}

export interface IService {
  label: string;
  value: string;
}

export type Services = IService[];

export interface IContacts {
  info: {
    email: string;
    phone: Phone;
    address: IAddress;
  };
  services: Services;
}

export interface IContactsFormData {
  name: string;
  email: string;
  phone: string;
  services?: Strings;
  message: string;
}

export type ContactsFormField = keyof IContactsFormData;

export type InvalidContactsFormFields = ContactsFormField[] | null;

export interface IContactsFormErrorMessage {
  field: ContactsFormField;
  message: string;
}

export type ContactsFormErrorMessages = IContactsFormErrorMessage[];

export type ContactsFormErrorDetails = [
  keyof IContactsFormData,
  FieldError | undefined
];

export type ContactsFormErrors = ContactsFormErrorDetails[];
