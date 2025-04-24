import { FC } from 'react';
import { Container, List, ListItem } from './OurProcessSectionStepsList.styled';
import OurProcessSectionStepDetails from '@AboutPageComponents/OurProcessSectionStepDetails';
import { IProps } from './OurProcessSectionStepsList.types';
import { getIsFirstItem, padStart } from '@/utils';

const OurProcessSectionStepsList: FC<IProps> = ({
  process,
  currentStep,
  textVariants,
  activePointRotate,
  activePointTranslateY,
  processImgContainerRef,
}) => {
  return (
    <Container>
      <List>
        {process.map(({ img, text }, index) => {
          const isCurrentStep = currentStep === index;
          const stepNumber = index + 1;
          const totalNumber = process.length;
          const isShow = getIsFirstItem(index);

          const number = padStart({
            value: stepNumber,
            maxLength: 2,
            addSymbol: '0',
          });
          const total = padStart({
            value: totalNumber,
            maxLength: 2,
            addSymbol: '0',
          });

          return (
            <ListItem key={index}>
              <OurProcessSectionStepDetails
                img={img}
                text={text}
                index={index}
                isCurrentStep={isCurrentStep}
                textVariants={textVariants}
                number={number}
                total={total}
                isShow={isShow}
                activePointRotate={activePointRotate}
                activePointTranslateY={activePointTranslateY}
                processImgContainerRef={processImgContainerRef}
              />
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default OurProcessSectionStepsList;
