import { FC } from 'react';
import { IProps } from './AtbProjectReviewsList.types';
import { List, ListItem } from './AtbProjectReviewsList.styled';
import AtbProjectReviewDetails from '@AtbProjectDetailsComponents/AtbProjectReviewDetails';

const AtbProjectReviewsList: FC<IProps> = ({ reviews }) => {
  return (
    <List>
      {reviews.map(({ avatar, jobTitle, name, text }, index) => (
        <ListItem key={index}>
          <AtbProjectReviewDetails
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

export default AtbProjectReviewsList;
