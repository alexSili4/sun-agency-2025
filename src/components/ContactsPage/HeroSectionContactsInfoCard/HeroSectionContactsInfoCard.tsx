import { FC } from 'react';
import {
  Container,
  Content,
  DecorativeLine,
  Marker,
  MarkerWrap,
  Title,
  TitleWrap,
} from './HeroSectionContactsInfoCard.styled';
import { IProps } from './HeroSectionContactsInfoCard.types';

const HeroSectionContactsInfoCard: FC<IProps> = ({
  content,
  title,
  icon,
  isAroundTheClock,
}) => {
  return (
    <Container>
      <Content>
        <TitleWrap>
          {icon}
          <Title>{title}</Title>
          {isAroundTheClock && (
            <MarkerWrap>
              <Marker>24/7</Marker>
            </MarkerWrap>
          )}
        </TitleWrap>
        <DecorativeLine></DecorativeLine>
        {content}
      </Content>
    </Container>
  );
};

export default HeroSectionContactsInfoCard;
