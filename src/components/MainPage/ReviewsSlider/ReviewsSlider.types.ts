import { Reviews } from '@/types/reviews.types';
import { NumberOrNull } from '@/types/types';

export interface IProps {
  reviews: Reviews;
  slideWidth: number;
  gap: number;
}

export interface IStyledSwiperSlideProps {
  slideWidth: number;
  slideHeight: NumberOrNull;
  gap: number;
}
