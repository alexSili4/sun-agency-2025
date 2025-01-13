import { FC } from 'react';
import { IProps } from './ReviewsSection.types.';
import SectionGeneralTitle from '../SectionGeneralTitle';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { Container, Section } from './ReviewsSection.styled';
import { reviews } from '@/constants';
import ReviewsSlider from '@MainPageComponents/ReviewsSlider';

const ReviewsSection: FC<IProps> = ({ sectionRef }) => {
  return (
    <Section ref={sectionRef}>
      <Container>
        <GeneralContainer>
          <SectionGeneralTitle title=' Відгуки' subtitle='Клієнти про нас ' />
        </GeneralContainer>
        <ReviewsSlider reviews={reviews} slideWidth={553} />
      </Container>
    </Section>
  );
};

export default ReviewsSection;
