import { FC } from 'react';
import { IProps } from './ReviewsSectionList.types';
import { List, ListItem } from './ReviewsSectionList.styled';
import ReviewsSectionReviewDetails from '@AtbProjectDetailsComponents/ReviewsSectionReviewDetails';

const ReviewsSectionList: FC<IProps> = ({ reviews }) => {
  return (
    <List>
      {reviews.map(({ avatar, jobTitle, name, text }, index) => (
        <ListItem key={index}>
          <ReviewsSectionReviewDetails
            avatar={avatar}
            jobTitle={jobTitle}
            name={name}
            text={text}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ReviewsSectionList;
