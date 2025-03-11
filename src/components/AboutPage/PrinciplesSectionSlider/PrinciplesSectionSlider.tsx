import { FC, useEffect, useRef, useState } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import {
  Background,
  Container,
  SliderWrap,
  StyledSwiper,
} from './PrinciplesSectionSlider.styled';
import { IProps } from './PrinciplesSectionSlider.types';
import PrinciplesSectionSliderPrincipleDetails from '@AboutPageComponents/PrinciplesSectionSliderPrincipleDetails';
import PrinciplesSectionSliderPagination from '@AboutPageComponents/PrinciplesSectionSliderPagination';
import { ISwiper, NumberOrNull } from '@/types/types';
import PrinciplesSectionSliderControls from '@AboutPageComponents/PrinciplesSectionSliderControls';

const PrinciplesSectionSlider: FC<IProps> = ({ principles }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [size, setSize] = useState<NumberOrNull>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollWidth = backgroundRef.current?.scrollWidth;

    if (scrollWidth) {
      setSize(scrollWidth);
    }
  }, []);

  const onAutoplayTimeLeft = (_: ISwiper, __: number, time: number) => {
    const progress = (1 - time) * 100;

    setProgress(progress);
  };

  const onSwiper = (swiper: ISwiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <Container>
      <SliderWrap>
        <Background ref={backgroundRef}></Background>
        <StyledSwiper
          onSwiper={onSwiper}
          onSlideChange={onSwiper}
          speed={800}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
        >
          {principles.map(({ text, title }, index) => (
            <SwiperSlide key={index}>
              <PrinciplesSectionSliderPrincipleDetails
                text={text}
                title={title}
              />
            </SwiperSlide>
          ))}
          <PrinciplesSectionSliderControls
            principles={principles}
            activeIndex={activeIndex}
            size={size}
            rotate={30}
          />
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
