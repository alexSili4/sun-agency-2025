import { FC } from 'react';
import { Container, ScrollBtn } from './DonationSectionContent.styled';
import { IProps } from './DonationSectionContent.types';
// ----- components
import DonationLink from '@MainPageComponents/DonationLink';

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
