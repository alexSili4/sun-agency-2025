import { FC } from 'react';
import { IProps } from './ReviewsSection.types';
import ReviewsSectionList from '@AtbProjectDetailsComponents/ReviewsSectionList';
import { Container, Section } from './ReviewsSection.styled';

const ReviewsSection: FC<IProps> = ({ reviews }) => {
  return (
    <Section>
      <Container>
        <ReviewsSectionList reviews={reviews} />
      </Container>
    </Section>
  );
};

export default ReviewsSection;
