import { FC } from 'react';
import AnimatedOurProcessSectionStepDetailsText from '@AnimationBlocks/AnimatedOurProcessSectionStepDetailsText';
import OurProcessSectionStepDetailsNumber from '@AboutPageComponents/OurProcessSectionStepDetailsNumber';
import { Container } from './OurProcessSectionStepDetails.styled';
import { IProps } from './OurProcessSectionStepDetails.types';
import OurProcessSectionStepDetailsImg from '@AboutPageComponents/OurProcessSectionStepDetailsImg';

const OurProcessSectionStepDetails: FC<IProps> = ({
  img,
  text,
  index,
  isCurrentStep,
  textVariants,
  number,
  total,
}) => {
  return (
    <Container>
      <OurProcessSectionStepDetailsNumber
        number={number}
        total={total}
        isShow={isCurrentStep}
        elementKey={index}
        variants={textVariants}
      />
      <OurProcessSectionStepDetailsImg img={img} isShow={isCurrentStep} />
      <AnimatedOurProcessSectionStepDetailsText
        variants={textVariants}
        text={text}
        isShow={isCurrentStep}
        elementKey={index}
      />
    </Container>
  );
};

export default OurProcessSectionStepDetails;
