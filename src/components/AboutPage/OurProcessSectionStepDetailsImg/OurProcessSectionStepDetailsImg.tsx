import { FC } from 'react';
import { Container, Border } from './OurProcessSectionStepDetailsImg.styled';
import { IProps } from './OurProcessSectionStepDetailsImg.types';

const OurProcessSectionStepDetailsImg: FC<IProps> = ({ img, isShow }) => {
  return (
    <Container isShow={isShow} img={img}>
      <Border></Border>
    </Container>
  );
};

export default OurProcessSectionStepDetailsImg;
