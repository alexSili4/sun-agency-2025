import { FC, useRef } from 'react';
import { IProps } from './OurProcessSectionSteps.types';
import { Container } from './OurProcessSectionSteps.styled';
import OurProcessSectionStepsList from '@AboutPageComponents/OurProcessSectionStepsList';
import { useProcessStepsListAnimation } from '@/hooks';

const OurProcessSectionSteps: FC<IProps> = ({
  process,
  activePointTranslateY,
  processImgContainerRef,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { textVariants, currentStep, activePointRotate } =
    useProcessStepsListAnimation({
      containerRef,
      process,
    });

  return (
    <Container ref={containerRef}>
      <OurProcessSectionStepsList
        process={process}
        currentStep={currentStep}
        textVariants={textVariants}
        activePointRotate={activePointRotate}
        activePointTranslateY={activePointTranslateY}
        processImgContainerRef={processImgContainerRef}
      />
    </Container>
  );
};

export default OurProcessSectionSteps;
