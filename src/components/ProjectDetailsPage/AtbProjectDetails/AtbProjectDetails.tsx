import { FC } from 'react';
import { Container } from './AtbProjectDetails.styled.ts';
import AtbProjectDetailsHeroSection from '@ProjectDetailsPageComponents/AtbProjectDetailsHeroSection';
import { IProps } from './AtbProjectDetails.types.ts';

const AtbProjectDetails: FC<IProps> = ({ project }) => {
  const { name, tags, title } = project;

  return (
    <Container>
      <AtbProjectDetailsHeroSection name={name} tags={tags} title={title} />
    </Container>
  );
};

export default AtbProjectDetails;
