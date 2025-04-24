import { FC } from 'react';
import {
  Container,
  Border,
  Logo,
} from './OurProcessSectionStepDetailsImg.styled';
import { IProps } from './OurProcessSectionStepDetailsImg.types';
import OurProcessSectionActivePoint from '@AboutPageComponents/OurProcessSectionActivePoint';

const OurProcessSectionStepDetailsImg: FC<IProps> = ({
  img,
  isShowLogo,
  isShow,
  activePointRotate,
  activePointTranslateY,
  containerRef,
}) => {
  return (
    <Container ref={containerRef}>
      <Logo isShow={isShowLogo} img={img}></Logo>
      {isShow && (
        <>
          <Border></Border>
          <OurProcessSectionActivePoint
            rotate={activePointRotate}
            translateY={activePointTranslateY}
          />
        </>
      )}
    </Container>
  );
};

export default OurProcessSectionStepDetailsImg;
