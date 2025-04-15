import { FC } from 'react';
import { Container, List, ListItem } from './OurProcessSectionStepsList.styled';
import OurProcessSectionStepDetails from '@AboutPageComponents/OurProcessSectionStepDetails';
import { IProps } from './OurProcessSectionStepsList.types';

const OurProcessSectionStepsList: FC<IProps> = ({
  process,
  activeIndex,
  textVariants,
}) => {
  return (
    <Container>
      <List>
        {process.map(({ img, text }, index) => {
          const isHiddenElement = index !== 0;

          return (
            <ListItem key={index} isHiddenElement={isHiddenElement}>
              <OurProcessSectionStepDetails
                img={img}
                text={text}
                isPositionAbsolute={isHiddenElement}
                index={index}
                activeIndex={activeIndex}
                textVariants={textVariants}
              />
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default OurProcessSectionStepsList;
