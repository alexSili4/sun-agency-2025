import { FC, useEffect, useRef, useState } from 'react';
import { IProps } from './ReviewsSlider.types';
import { Navigation } from 'swiper/modules';
import {
  Container,
  StyledSwiper,
  StyledSwiperSlide,
} from './ReviewsSlider.styled';
import { NumberOrNull } from '@/types/types';
// ----- components
import Review from '@MainPageComponents/Review';
import ReviewsSliderControls from '@MainPageComponents/ReviewsSliderControls';

const ReviewsSlider: FC<IProps> = ({ reviews, slideWidth, gap }) => {
  const [slideHeight, setSlideHeight] = useState<NumberOrNull>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slideHeight = containerRef.current?.clientHeight;

    if (slideHeight) {
      setSlideHeight(slideHeight);
    }
  }, []);

  return (
    <Container ref={containerRef}>
      <StyledSwiper modules={[Navigation]} slidesPerView='auto'>
        {reviews.map(({ avatar, jobTitle, name, text }, index) => (
          <StyledSwiperSlide
            key={index}
            gap={gap}
            slideWidth={slideWidth}
            slideHeight={slideHeight}
          >
            <Review
              avatar={avatar}
              jobTitle={jobTitle}
              name={name}
              text={text}
            />
          </StyledSwiperSlide>
        ))}
        <ReviewsSliderControls />
      </StyledSwiper>
    </Container>
  );
};

export default ReviewsSlider;
