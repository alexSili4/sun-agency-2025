import { FC, useEffect, useState } from 'react';
import AnimatedOurProcessSectionStepDetailsText from '@AnimationBlocks/AnimatedOurProcessSectionStepDetailsText';
import OurProcessSectionStepDetailsNumber from '@AboutPageComponents/OurProcessSectionStepDetailsNumber';
import { Container } from './OurProcessSectionStepDetails.styled';
import { IProps } from './OurProcessSectionStepDetails.types';
import OurProcessSectionStepDetailsImg from '@AboutPageComponents/OurProcessSectionStepDetailsImg';
import { useTransform } from 'framer-motion';
import { getCurrentOpacity } from '@/utils';

const OurProcessSectionStepDetails: FC<IProps> = ({
  img,
  text,
  isPositionAbsolute,
  index,
  activeIndex,
  textVariants,
}) => {
  const [isCurrentItem, setIsCurrentItem] = useState<boolean>(false);

  useEffect(() => {
    const onProcessActiveIndexChange = (value: number) => {
      const activeIndex = Math.round(value);
      const isCurrentItem = activeIndex === index;

      setIsCurrentItem(isCurrentItem);
    };

    const unsubscribe = activeIndex.on('change', onProcessActiveIndexChange);

    return () => unsubscribe();
  }, []);

  const getOpacity = (value: number) => getCurrentOpacity({ value, index });

  const opacity = useTransform(activeIndex, getOpacity);

  return (
    <Container isPositionAbsolute={isPositionAbsolute}>
      <OurProcessSectionStepDetailsNumber />
      <OurProcessSectionStepDetailsImg img={img} opacity={opacity} />
      <AnimatedOurProcessSectionStepDetailsText
        variants={textVariants}
        text={text}
        isShow={isCurrentItem}
        key={index}
      />
    </Container>
  );
};

export default OurProcessSectionStepDetails;
