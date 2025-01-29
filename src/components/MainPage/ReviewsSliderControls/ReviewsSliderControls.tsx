import { theme } from '@/constants';
import { FC } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { Container } from './ReviewsSliderControls.styled';
import { useSwiper } from 'swiper/react';
import glowingRoundBtn from '@/lottiefiles/glow/glowing-round-btn.json';
// ----- components
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import GlowingButton from '@GeneralComponents/GlowingButton';

const ReviewsSliderControls: FC = () => {
  const swiper = useSwiper();

  const onPrevNavBtnClick = () => {
    swiper.slidePrev();
  };

  const onNextNavBtnClick = () => {
    swiper.slideNext();
  };

  return (
    <GeneralContainer top='-159px' isPositionAbsolute isCenterXPosition>
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
    </GeneralContainer>
  );
};

export default ReviewsSliderControls;
