import { FC } from 'react';
import { theme } from '@/constants';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { Container } from './ReviewsSectionSliderControlsContent.styled';
import { useSwiper } from 'swiper/react';
import glowingRoundBtn from '@/lottiefiles/glow/glowing-round-btn.json';
// ----- components
import GlowingButton from '@GeneralComponents/GlowingButton';

const ReviewsSectionSliderControlsContent: FC = () => {
  const swiper = useSwiper();

  const onPrevNavBtnClick = () => {
    swiper.slidePrev();
  };

  const onNextNavBtnClick = () => {
    swiper.slideNext();
  };

  return (
    <Container>
      <GlowingButton
        onClick={onPrevNavBtnClick}
        animationData={glowingRoundBtn}
        glowHeight={70}
        glowWidth={70}
        width={58}
      >
        <FaChevronLeft size={theme.iconSizes.reviewsSlider} />
      </GlowingButton>
      <GlowingButton
        onClick={onNextNavBtnClick}
        animationData={glowingRoundBtn}
        glowHeight={70}
        glowWidth={70}
        width={58}
      >
        <FaChevronRight size={theme.iconSizes.reviewsSlider} />
      </GlowingButton>
    </Container>
  );
};

export default ReviewsSectionSliderControlsContent;
