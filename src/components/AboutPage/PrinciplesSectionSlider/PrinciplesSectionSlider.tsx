import { FC } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import {
  Background,
  Container,
  SliderWrap,
  StyledSwiper,
  StyledSwiperSlide,
} from './PrinciplesSectionSlider.styled';
import { IProps } from './PrinciplesSectionSlider.types';
import PrinciplesSectionSliderPrincipleDetails from '@AboutPageComponents/PrinciplesSectionSliderPrincipleDetails';
import PrinciplesSectionSliderPagination from '@AboutPageComponents/PrinciplesSectionSliderPagination';
import PrinciplesSectionSliderControls from '@AboutPageComponents/PrinciplesSectionSliderControls';
import { usePrinciplesSlider } from '@/hooks';

const PrinciplesSectionSlider: FC<IProps> = ({ principles, backgroundRef }) => {
  const { activeIndex, onAutoplayTimeLeft, onSwiper, progress, size } =
    usePrinciplesSlider(backgroundRef);

  return (
    <Container>
      <SliderWrap>
        <StyledSwiper
          onSwiper={onSwiper}
          onSlideChange={onSwiper}
          speed={800}
          slidesPerView='auto'
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
        >
          <PrinciplesSectionSliderControls
            principles={principles}
            activeIndex={activeIndex}
            size={size}
            rotate={30}
          />
          <Background ref={backgroundRef}></Background>
          {principles.map(({ text, title }, index) => {
            const isActiveSlide = index === activeIndex;

            return (
              <StyledSwiperSlide key={index}>
                <PrinciplesSectionSliderPrincipleDetails
                  text={text}
                  title={title}
                  isActiveSlide={isActiveSlide}
                />
              </StyledSwiperSlide>
            );
          })}
          <PrinciplesSectionSliderPagination
            principles={principles}
            activeIndex={activeIndex}
            progress={progress}
          />
        </StyledSwiper>
      </SliderWrap>
    </Container>
  );
};

export default PrinciplesSectionSlider;
