import { Phone } from '@/types/contacts.types';

export interface IProps {
  contactLength: number;
  email: string;
  phone: Phone;
  addressLink: string;
  addressText: string;
}

export interface IStyledListItemProps {
  contacts: number;
}
