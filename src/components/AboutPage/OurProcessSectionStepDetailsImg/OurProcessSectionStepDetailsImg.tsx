import { FC } from 'react';
import { Container, Image } from './OurProcessSectionStepDetailsImg.styled';
import { IProps } from './OurProcessSectionStepDetailsImg.types';

const OurProcessSectionStepDetailsImg: FC<IProps> = ({ img, isShow }) => {
  return (
    <Container isShow={isShow}>
      <Image src={img} alt='' />
    </Container>
  );
};

export default OurProcessSectionStepDetailsImg;
