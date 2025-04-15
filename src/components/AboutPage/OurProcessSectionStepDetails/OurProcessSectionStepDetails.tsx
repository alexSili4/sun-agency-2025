import { FC } from 'react';
import AnimatedOurProcessSectionStepDetailsText from '@AnimationBlocks/AnimatedOurProcessSectionStepDetailsText';
import OurProcessSectionStepDetailsNumber from '@AboutPageComponents/OurProcessSectionStepDetailsNumber';
import { Container } from './OurProcessSectionStepDetails.styled';
import { IProps } from './OurProcessSectionStepDetails.types';
import OurProcessSectionStepDetailsImg from '@AboutPageComponents/OurProcessSectionStepDetailsImg';

const OurProcessSectionStepDetails: FC<IProps> = ({
  img,
  text,
  isPositionAbsolute,
  index,
  isCurrentStep,
  textVariants,
  number,
  total,
}) => {
  return (
    <Container isPositionAbsolute={isPositionAbsolute}>
      <OurProcessSectionStepDetailsNumber
        number={number}
        total={total}
        isShow={isCurrentStep}
      />
      <OurProcessSectionStepDetailsImg img={img} isShow={isCurrentStep} />
      <AnimatedOurProcessSectionStepDetailsText
        variants={textVariants}
        text={text}
        isShow={isCurrentStep}
        key={index}
      />
    </Container>
  );
};

export default OurProcessSectionStepDetails;
