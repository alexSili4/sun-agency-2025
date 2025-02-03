import { FC } from 'react';
import { Container, ScrollBtn } from './HeroSectionDonationInfo.styled';
import { IProps } from './HeroSectionDonationInfo.types';
// ----- components
import HeroSectionDonationLink from '@MainPageComponents/HeroSectionDonationLink';

const HeroSectionDonationInfo: FC<IProps> = ({ onScrollBtnClick }) => {
  return (
    <Container>
      <HeroSectionDonationLink />
      <ScrollBtn type='button' onClick={onScrollBtnClick}>
        Гортати далі
      </ScrollBtn>
    </Container>
  );
};

export default HeroSectionDonationInfo;
