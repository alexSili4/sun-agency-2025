import { FC } from 'react';
import { IProps } from './AtbProjectReviewsSection.types';
import AtbProjectReviewsList from '@AtbProjectDetailsComponents/AtbProjectReviewsList';
import { Container, Section } from './AtbProjectReviewsSection.styled';

const AtbProjectReviewsSection: FC<IProps> = ({ reviews }) => {
  return (
    <Section>
      <Container>
        <AtbProjectReviewsList reviews={reviews} />
      </Container>
    </Section>
  );
};

export default AtbProjectReviewsSection;
