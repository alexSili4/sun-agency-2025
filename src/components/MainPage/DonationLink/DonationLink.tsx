import { PagePaths, theme } from '@/constants';
import { FC } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import {
  LinkDecorativeImg,
  LinkIconContainer,
  LinkIconWrap,
  LinkTitle,
  StyledLink,
} from './DonationLink.styled';
import donationLink from '@/images/main/donation-link.png';

const DonationLink: FC = () => {
  return (
    // TODO fix
    <StyledLink to={PagePaths.root}>
      <LinkTitle></LinkTitle>
      <LinkIconContainer>
        <LinkDecorativeImg src={donationLink} />
        <LinkIconWrap>
          <FaChevronRight size={theme.iconSizes.donationLink} />
        </LinkIconWrap>
      </LinkIconContainer>
    </StyledLink>
  );
};

export default DonationLink;
