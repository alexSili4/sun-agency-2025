import { FC } from 'react';
import GlowingContainer from '@GeneralComponents/GlowingContainer';
import { Button } from './ReviewsSliderNavBtn.styled';
import { IProps } from './ReviewsSliderNavBtn.types';

const ReviewsSliderNavBtn: FC<IProps> = ({ children, onClick }) => {
  return (
    <GlowingContainer borderRadius='50%' zIndex={0} isSubduedLighting>
      <Button type='button' onClick={onClick}>
        {children}
      </Button>
    </GlowingContainer>
  );
};

export default ReviewsSliderNavBtn;
