import { theme } from '@/constants';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { FC } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { Container } from './ReviewsSliderControls.styled';
import { useSwiper } from 'swiper/react';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import ReviewsSliderNavBtn from '../ReviewsSliderNavBtn';

const ReviewsSliderControls: FC = () => {
  const swiper = useSwiper();

  const onPrevNavBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    swiper.slidePrev();
  };

  const onNextNavBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    swiper.slideNext();
  };

  return (
    <GeneralContainer top='-159px' isPositionAbsolute isCenterXPosition>
      <Container>
        <ReviewsSliderNavBtn onClick={onPrevNavBtnClick}>
          <FaChevronLeft size={theme.iconSizes.reviewsSlider} />
        </ReviewsSliderNavBtn>
        <ReviewsSliderNavBtn onClick={onNextNavBtnClick}>
          <FaChevronRight size={theme.iconSizes.reviewsSlider} />
        </ReviewsSliderNavBtn>
      </Container>
    </GeneralContainer>
  );
};

export default ReviewsSliderControls;
