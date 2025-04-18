import { PagePaths, theme } from '@/constants';
import { FC, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import {
  LinkDecorativeImg,
  LinkIconContainer,
  LinkIconWrap,
  LinkTitle,
  ShadowImg,
  StyledLink,
  StyledReactPlayer,
} from './HeroSectionDonationLink.styled';
import donationLink from '@/images/main/hero/donation-link.png';
import video from '@/video/donation-link-compressed.mp4';
import donationLinkShadow from '@/images/main/hero/donation-link-shadow.png';

const HeroSectionDonationLink: FC = () => {
  const [play, setPlay] = useState<boolean>(false);

  const allowAutoplay = () => {
    setPlay(true);
  };

  const disableAutoplay = () => {
    setPlay(false);
  };

  const onDonationLinkMouseFocus = () => {
    allowAutoplay();
  };

  const onDonationLinkBlur = () => {
    disableAutoplay();
  };

  return (
    <StyledLink
      to={PagePaths.root}
      onMouseOver={onDonationLinkMouseFocus}
      onMouseOut={onDonationLinkBlur}
    >
      <StyledReactPlayer
        url={video}
        playing={play}
        playsinline
        stopOnUnmount
        muted
      />
      <ShadowImg src={donationLinkShadow} alt='' />
      <LinkTitle>Допомога рідному 206 батальйону ТрО</LinkTitle>
      <LinkIconContainer>
        <LinkDecorativeImg src={donationLink} alt='' />
        <LinkIconWrap>
          <FaChevronRight size={theme.iconSizes.donationLink} />
        </LinkIconWrap>
      </LinkIconContainer>
    </StyledLink>
  );
};

export default HeroSectionDonationLink;
