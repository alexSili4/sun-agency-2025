import { FC } from 'react';
import { Button } from './ReviewsSliderNavBtn.styled';
import { IProps } from './ReviewsSliderNavBtn.types';

const ReviewsSliderNavBtn: FC<IProps> = ({ children, onClick }) => {
  return (
    <Button type='button' onClick={onClick}>
      {children}
    </Button>
  );
};

export default ReviewsSliderNavBtn;
