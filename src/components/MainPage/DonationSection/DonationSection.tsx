import { FC } from 'react';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { Section } from './DonationSection.styled';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import DonationSectionSpline from '@MainPageComponents/DonationSectionSpline';
import SectionTitle from '@GeneralComponents/SectionTitle';
import DonationSectionContent from '@MainPageComponents/DonationSectionContent';

const DonationSection: FC = () => {
  const onScrollBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    // TODO add action
  };

  return (
    <Section>
      <SectionTitle text='Допомога 206 батальйону ТрО' isHidden />
      <DonationSectionSpline />
      <GeneralContainer>
        {/* TODO fix */}
        <DonationSectionContent onScrollBtnClick={onScrollBtnClick} />
      </GeneralContainer>
    </Section>
  );
};

export default DonationSection;
