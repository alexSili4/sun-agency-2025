import { FC } from 'react';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import DonationLink from '@MainPageComponents/DonationLink';
import { ContentWrap, ScrollBtn, Section } from './DonationSection.styled';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';

const DonationSection: FC = () => {
  const onScrollBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    // TODO add action
  };

  return (
    <Section>
      <GeneralContainer>
        <ContentWrap>
          {/* TODO fix */}
          <ScrollBtn type='button' onClick={onScrollBtnClick}>
            Гортати далі
          </ScrollBtn>
          <DonationLink />
        </ContentWrap>
      </GeneralContainer>
    </Section>
  );
};

export default DonationSection;
