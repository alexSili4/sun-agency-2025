import { Clients } from '@/types/clients.types';
import { MarqueeDirection } from '@/types/types';

export interface IProps {
  clients: Clients;
  direction: MarqueeDirection;
}
