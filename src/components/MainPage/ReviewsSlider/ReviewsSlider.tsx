import { FC, useEffect, useState } from 'react';
import { IProps } from './ReviewsSlider.types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { theme } from '@/constants';
import Review from '@MainPageComponents/Review';
import { getSlidesPerView } from '@/utils';

const ReviewsSlider: FC<IProps> = ({ reviews, slideWidth }) => {
  const [slidesPerView, setSlidesPerView] = useState<number>(() =>
    getSlidesPerView(slideWidth)
  );

  useEffect(() => {
    const onWindowResize = () => {
      const slidesPerView = getSlidesPerView(slideWidth);

      setSlidesPerView(slidesPerView);
    };

    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, [slideWidth]);

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={theme.spacing(4)}
      slidesPerView={slidesPerView}
    >
      {reviews.map(({ avatar, jobTitle, name, text }, index) => (
        <SwiperSlide key={index}>
          <Review avatar={avatar} jobTitle={jobTitle} name={name} text={text} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewsSlider;
