import { FC } from 'react';
import { IProps } from './HeroSectionBanner.types';
import { Container, Image } from './HeroSectionBanner.styled';

const AtbHeroSectionBanner: FC<IProps> = ({
  banner,
  borderRadiusMobile,
  borderRadiusDesk,
}) => {
  return (
    <Container
      banner={banner}
      borderRadiusDesk={borderRadiusDesk}
      borderRadiusMobile={borderRadiusMobile}
    >
      <Image src={banner} alt='' />
    </Container>
  );
};

export default AtbHeroSectionBanner;
