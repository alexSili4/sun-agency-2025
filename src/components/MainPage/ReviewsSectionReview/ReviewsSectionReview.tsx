import { FC } from 'react';
import { IProps } from './ReviewsSectionReview.types';
import decorativeIcon from '@/images/main/reviews/decorative-icon.png';
import {
  Container,
  Avatar,
  ClientInfo,
  ClientInfoWrap,
  DecorativeIcon,
  JobTitle,
  Name,
  Text,
  TextWrap,
} from './ReviewsSectionReview.styled';

const ReviewsSectionReview: FC<IProps> = ({ avatar, jobTitle, name, text }) => {
  return (
    <Container>
      <Text>{text}</Text>
      <ClientInfoWrap>
        <ClientInfo>
          <Avatar src={avatar} />
          <TextWrap>
            <Name>{name}</Name>
            <JobTitle>{jobTitle}</JobTitle>
          </TextWrap>
        </ClientInfo>
        <DecorativeIcon src={decorativeIcon} />
      </ClientInfoWrap>
    </Container>
  );
};

export default ReviewsSectionReview;
