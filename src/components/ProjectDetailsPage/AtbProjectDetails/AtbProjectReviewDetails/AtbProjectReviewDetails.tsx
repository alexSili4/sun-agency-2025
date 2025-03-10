import { FC } from 'react';
import { IProps } from './AtbProjectReviewDetails.types';
import {
  Container,
  Avatar,
  DetailsWrap,
  JobTitle,
  Name,
  NameWrap,
  Text,
  DecorativeElement,
  InfoWrap,
} from './AtbProjectReviewDetails.styled';
import reviewDecorativeElement from '@/images/projectDetails/review-decorative-element.png';

const AtbProjectReviewDetails: FC<IProps> = ({
  text,
  name,
  avatar,
  jobTitle,
}) => {
  return (
    <Container>
      <Text>{text}</Text>
      <InfoWrap>
        <DetailsWrap>
          <Avatar src={avatar} alt={name} />
          <NameWrap>
            <Name>{name}</Name>
            <JobTitle>{jobTitle}</JobTitle>
          </NameWrap>
        </DetailsWrap>
        <DecorativeElement
          src={reviewDecorativeElement}
          alt='Декоративний елемент'
        />
      </InfoWrap>
    </Container>
  );
};

export default AtbProjectReviewDetails;
