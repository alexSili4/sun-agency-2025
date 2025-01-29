import { FC, useRef } from 'react';
import { Container, ListContainer } from './BusinessMetrics.styled';
import { useScroll, useTransform } from 'framer-motion';
// ----- components
import StatisticsList from '@MainPageComponents/StatisticsList';
import HeroSectionSpline from '@MainPageComponents/HeroSectionSpline';

const BusinessMetrics: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scrollPercentage = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const firstOpacity = useTransform(
    scrollPercentage,
    [0, 30, 35, 65, 70, 100],
    [1, 1, 0, 0, 0, 0]
  );
  const secondOpacity = useTransform(
    scrollPercentage,
    [0, 30, 35, 65, 70, 100],
    [0, 0, 1, 1, 0, 0]
  );
  const thirdOpacity = useTransform(
    scrollPercentage,
    [0, 30, 35, 65, 70, 100],
    [0, 0, 0, 0, 1, 1]
  );

  return (
    <Container ref={containerRef}>
      <ListContainer>
        <HeroSectionSpline />
        <StatisticsList
          firstOpacity={firstOpacity}
          secondOpacity={secondOpacity}
          thirdOpacity={thirdOpacity}
        />
      </ListContainer>
    </Container>
  );
};

export default BusinessMetrics;
