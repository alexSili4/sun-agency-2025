import { FC } from 'react';
import {
  Element,
  Point,
  PointWrap,
  PointBg,
  Container,
} from './OurProcessSectionActivePoint.styled';
import Star from '@/icons/about/activePoint/star.svg?react';
import { IProps } from './OurProcessSectionActivePoint.types';

const OurProcessSectionActivePoint: FC<IProps> = ({ rotate, translateY }) => {
  return (
    <Container translateY={translateY}>
      <Element rotate={rotate}>
        <PointWrap>
          <PointBg></PointBg>
          <Point>
            <Star />
          </Point>
        </PointWrap>
      </Element>
    </Container>
  );
};

export default OurProcessSectionActivePoint;
