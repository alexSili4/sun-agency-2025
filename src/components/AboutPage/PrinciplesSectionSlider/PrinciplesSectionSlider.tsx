import { FC } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, SliderWrap } from './PrinciplesSectionSlider.styled';
import { IProps } from './PrinciplesSectionSlider.types';

const PrinciplesSectionSlider: FC<IProps> = ({ principles }) => {
  const onAutoplayTimeLeft = () => {
    console.log('onAutoplayTimeLeft');
  };

  return (
    <Container>
      <SliderWrap>
        <Swiper
          speed={800}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
        >
          {principles.map(({}, index) => (
            <SwiperSlide key={index}>Slide 1</SwiperSlide>
          ))}
        </Swiper>
      </SliderWrap>
    </Container>
  );
};

export default PrinciplesSectionSlider;
