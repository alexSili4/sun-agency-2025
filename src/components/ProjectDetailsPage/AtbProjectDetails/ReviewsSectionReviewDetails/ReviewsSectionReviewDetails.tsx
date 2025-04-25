import { FC } from 'react';
import { IProps } from './ReviewsSectionReviewDetails.types';
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
} from './ReviewsSectionReviewDetails.styled';
import reviewDecorativeElement from '@/images/projectDetails/review-decorative-element.png';

const ReviewsSectionReviewDetails: FC<IProps> = ({
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

export default ReviewsSectionReviewDetails;
