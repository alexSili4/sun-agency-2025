import { FC } from 'react';
import { IProps } from './TeamSectionSunAgencyTargetTeam.types';
import { Container, Title } from './TeamSectionSunAgencyTargetTeam.styled';
// ----- components
import TeamSectionSunAgencyTargetTeamList from '@AtbProjectDetailsComponents/TeamSectionSunAgencyTargetTeamList';

const TeamSectionSunAgencyTargetTeam: FC<IProps> = ({ title, team }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <TeamSectionSunAgencyTargetTeamList team={team} />
    </Container>
  );
};

export default TeamSectionSunAgencyTargetTeam;
