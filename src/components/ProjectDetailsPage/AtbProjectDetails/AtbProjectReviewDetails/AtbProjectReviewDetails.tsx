import { FC } from 'react';
import { IProps } from './AtbProjectReviewDetails.types';
import {
  Container,
  Image,
  InfoWrap,
  JobTitle,
  Name,
  NameWrap,
  Text,
} from './AtbProjectReviewDetails.styled';

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
        <Image src={avatar} alt={name} />
        <NameWrap>
          <Name>{name}</Name>
          <JobTitle>{jobTitle}</JobTitle>
        </NameWrap>
      </InfoWrap>
    </Container>
  );
};

export default AtbProjectReviewDetails;
