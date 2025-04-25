import { FC } from 'react';
import { Text } from './TeamSectionTeamMember.styled';
import { IProps } from './TeamSectionTeamMember.types';

const TeamSectionTeamMember: FC<IProps> = ({ teamMember }) => {
  return <Text>{teamMember}</Text>;
};

export default TeamSectionTeamMember;
