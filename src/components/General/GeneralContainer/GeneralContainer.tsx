import { FC } from 'react';
import { IProps } from './GeneralContainer.types';
import { Container } from './GeneralContainer.styled';

const GeneralContainer: FC<IProps> = ({
  children,
  isFullHeight = false,
  isPositionRelative = false,
  isPositionAbsolute = false,
  isCenterXPosition = false,
  isPointerEventsNote = false,
  top,
}) => {
  return (
    <Container
      isFullHeight={isFullHeight}
      isPositionRelative={isPositionRelative}
      isPositionAbsolute={isPositionAbsolute}
      isCenterXPosition={isCenterXPosition}
      isPointerEventsNote={isPointerEventsNote}
      top={top}
    >
      {children}
    </Container>
  );
};

export default GeneralContainer;
