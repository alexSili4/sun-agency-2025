import { FC, useRef } from 'react';
import { IProps } from './OurProcessSectionSteps.types';
import { Container } from './OurProcessSectionSteps.styled';
import OurProcessSectionStepsList from '@AboutPageComponents/OurProcessSectionStepsList';
import { useProcessStepsListAnimation } from '@/hooks';

const OurProcessSectionSteps: FC<IProps> = ({ process }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const processLength = process.length;
  const { textVariants, currentStep } = useProcessStepsListAnimation({
    containerRef,
    processLength,
  });

  return (
    <Container ref={containerRef}>
      <OurProcessSectionStepsList
        process={process}
        currentStep={currentStep}
        textVariants={textVariants}
      />
    </Container>
  );
};

export default OurProcessSectionSteps;
