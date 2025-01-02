import { FC, useRef } from 'react';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { Section } from './DonationSection.styled';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import DonationSectionSpline from '@MainPageComponents/DonationSectionSpline';
import SectionTitle from '@GeneralComponents/SectionTitle';
import DonationSectionContent from '@MainPageComponents/DonationSectionContent';
import DonationSectionStatistics from '@MainPageComponents/DonationSectionStatistics';
import { useScroll, useTransform } from 'motion/react';

const DonationSection: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['550px', 'end center'],
  });

  const scrollPercentage = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const firstOpacity = useTransform(scrollPercentage, [0, 33, 66], [1, 0, 0]);
  const secondOpacity = useTransform(
    scrollPercentage,
    [33, 66, 100],
    [0, 1, 0]
  );
  const thirdOpacity = useTransform(scrollPercentage, [66, 100], [0, 1]);

  const onScrollBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    // TODO add action
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
