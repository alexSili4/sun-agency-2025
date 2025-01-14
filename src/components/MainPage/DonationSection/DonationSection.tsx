import { FC, useRef } from 'react';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { Section } from './DonationSection.styled';
import { BtnClickEvent } from '@/types/types';
import { makeBlur, smoothScroll } from '@/utils';
import DonationSectionSpline from '@MainPageComponents/DonationSectionSpline';
import SectionTitle from '@GeneralComponents/SectionTitle';
import DonationSectionContent from '@MainPageComponents/DonationSectionContent';
import DonationSectionStatistics from '@MainPageComponents/DonationSectionStatistics';
import { useScroll, useTransform } from 'framer-motion';
import { SectionsIds } from '@/constants';

const DonationSection: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const scrollPercentage = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const firstOpacity = useTransform(
    scrollPercentage,
    [
      0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
      95, 100,
    ],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
  );
  const secondOpacity = useTransform(
    scrollPercentage,
    [
      0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
      95, 100,
    ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0]
  );
  const thirdOpacity = useTransform(
    scrollPercentage,
    [
      0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
      95, 100,
    ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]
  );

  const onScrollBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    smoothScroll({ id: SectionsIds.projects });
  };

  return (
    <Section ref={sectionRef}>
      <SectionTitle text='Допомога 206 батальйону ТрО' isHidden />
      <DonationSectionSpline />
      <GeneralContainer>
        {/* TODO fix */}
        <DonationSectionContent onScrollBtnClick={onScrollBtnClick} />
      </GeneralContainer>
      <DonationSectionStatistics
        firstOpacity={firstOpacity}
        secondOpacity={secondOpacity}
        thirdOpacity={thirdOpacity}
      />
    </Section>
  );
};

export default DonationSection;
