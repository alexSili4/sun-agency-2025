import { FC } from 'react';
import { IProps } from './ReviewsSection.types.';
import { Container, Section } from './ReviewsSection.styled';
import { reviews } from '@/constants';
// ----- components
import SectionGeneralTitle from '@MainPageComponents/SectionGeneralTitle';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import AnimatedReviewsSlider from '@AnimatedMainPageComponents/AnimatedReviewsSlider';

const ReviewsSection: FC<IProps> = ({ sectionRef }) => {
  return (
    <Section ref={sectionRef}>
      <Container>
        <GeneralContainer>
          <SectionGeneralTitle title='Відгуки' subtitle='Клієнти про нас ' />
        </GeneralContainer>
        <AnimatedReviewsSlider reviews={reviews} />
      </Container>
    </Section>
  );
};

export default ReviewsSection;
