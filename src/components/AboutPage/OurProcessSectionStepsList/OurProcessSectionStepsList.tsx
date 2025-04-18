import { FC } from 'react';
import { Container, List, ListItem } from './OurProcessSectionStepsList.styled';
import OurProcessSectionStepDetails from '@AboutPageComponents/OurProcessSectionStepDetails';
import { IProps } from './OurProcessSectionStepsList.types';
import { padStart } from '@/utils';

const OurProcessSectionStepsList: FC<IProps> = ({
  process,
  currentStep,
  textVariants,
}) => {
  return (
    <Container>
      <List>
        {process.map(({ img, text }, index) => {
          const isCurrentStep = currentStep === index;
          const stepNumber = index + 1;
          const totalNumber = process.length;

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
              />
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default OurProcessSectionStepsList;
