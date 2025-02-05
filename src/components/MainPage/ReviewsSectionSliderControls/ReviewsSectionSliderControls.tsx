import { FC } from 'react';
import { useIsDesk } from '@/hooks';
// ----- components
import ReviewsSectionSliderControlsContent from '@MainPageComponents/ReviewsSectionSliderControlsContent';
import GeneralContainer from '@GeneralComponents/GeneralContainer';

const ReviewsSectionSliderControls: FC = () => {
  const isDesk = useIsDesk();

  return isDesk ? (
    <GeneralContainer top='-159px' isPositionAbsolute isCenterXPosition>
      <ReviewsSectionSliderControlsContent />
    </GeneralContainer>
  ) : (
    <ReviewsSectionSliderControlsContent />
  );
};

export default ReviewsSectionSliderControls;
