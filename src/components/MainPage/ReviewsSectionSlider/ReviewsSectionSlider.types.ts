import { Reviews } from '@/types/reviews.types';
import { NumberOrNull } from '@/types/types';

export interface IProps {
  reviews: Reviews;
  slideWidthMob: number;
  slideWidthDesk: number;
  gap: number;
}

export interface IStyledSwiperSlideProps {
  slideWidthMob: number;
  slideWidthDesk: number;
  slideHeight: NumberOrNull;
  gap: number;
}
