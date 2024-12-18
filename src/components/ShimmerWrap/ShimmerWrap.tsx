import { FC } from 'react';
import { Container, Backdrop, StyledShimmerDiv } from './ShimmerWrap.styled';
import { IProps } from './ShimmerWrap.types';

const ShimmerWrap: FC<IProps> = ({
  children,
  rounded,
  width,
  height = width,
}) => {
  return (
    <Container>
      <StyledShimmerDiv
        mode='custom'
        height={height}
        width={width}
        from='#fce190'
        via='#fff9d7'
        to='#ff7f07'
        rounded={rounded}
      />
      <Backdrop height={height} width={width} rounded={rounded}></Backdrop>
      {children}
    </Container>
  );
};

export default ShimmerWrap;
