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

export interface IContacts {
  email: string;
  phone: Phone;
  address: IAddress;
}
