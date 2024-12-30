import { FC } from 'react';
import DonationLink from '@MainPageComponents/DonationLink';
import { Container, ScrollBtn } from './DonationSectionContent.styled';
import { IProps } from './DonationSectionContent.types';

const DonationSectionContent: FC<IProps> = ({ onScrollBtnClick }) => {
  return (
    <Container>
      <ScrollBtn type='button' onClick={onScrollBtnClick}>
        Гортати далі
      </ScrollBtn>
      <DonationLink />
    </Container>
  );
};

export default DonationSectionContent;
