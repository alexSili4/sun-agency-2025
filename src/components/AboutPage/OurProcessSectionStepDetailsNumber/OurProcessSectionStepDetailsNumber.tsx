import { FC } from 'react';
import { IProps } from './OurProcessSectionStepDetailsNumber.types';
import AnimatedOurProcessSectionStepDetailsNumberItem from '@AnimationBlocks/AnimatedOurProcessSectionStepDetailsNumberItem';
import {
  Container,
  TextWrap,
  Total,
} from './OurProcessSectionStepDetailsNumber.styled';

const OurProcessSectionStepDetailsNumber: FC<IProps> = ({
  elementKey,
  number,
  total,
  variants,
  isShow,
}) => {
  const totalText = `/${total}`;

  return (
    <Container>
      <TextWrap>
        <AnimatedOurProcessSectionStepDetailsNumberItem
          number={number}
          variants={variants}
          isShow={isShow}
          elementKey={elementKey}
        />
        {isShow && <Total>{totalText}</Total>}
      </TextWrap>
    </Container>
  );
};

export default OurProcessSectionStepDetailsNumber;
