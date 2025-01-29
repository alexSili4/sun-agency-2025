import { FC } from 'react';
import { IProps } from './AtbSunAgencyTargetTeam.types';
import { Container, Title } from './AtbSunAgencyTargetTeam.styled';
import AtbSunAgencyTargetTeamList from '@AtbProjectDetailsComponents/AtbSunAgencyTargetTeamList';

const AtbSunAgencyTargetTeam: FC<IProps> = ({ title, team }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <AtbSunAgencyTargetTeamList team={team} />
    </Container>
  );
};

export default AtbSunAgencyTargetTeam;
