import { FC, useEffect, useRef, useState } from 'react';
import { IProps } from './ReviewsSectionSlider.types';
import { Navigation } from 'swiper/modules';
import {
  Container,
  StyledSwiper,
  StyledSwiperSlide,
} from './ReviewsSectionSlider.styled';
import { NumberOrNull } from '@/types/types';
// ----- components
import ReviewsSectionReview from '@MainPageComponents/ReviewsSectionReview';
import ReviewsSectionSliderControls from '@MainPageComponents/ReviewsSectionSliderControls';

const ReviewsSectionSlider: FC<IProps> = ({
  reviews,
  slideWidthMob,
  slideWidthDesk,
  gap,
}) => {
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
            slideWidthMob={slideWidthMob}
            slideWidthDesk={slideWidthDesk}
            slideHeight={slideHeight}
          >
            <ReviewsSectionReview
              avatar={avatar}
              jobTitle={jobTitle}
              name={name}
              text={text}
            />
          </StyledSwiperSlide>
        ))}
        <ReviewsSectionSliderControls />
      </StyledSwiper>
    </Container>
  );
};

export default ReviewsSectionSlider;
