import { FC } from 'react';
import { Text } from './AtbTeamMember.styled';
import { IProps } from './AtbTeamMember.types';

const AtbTeamMember: FC<IProps> = ({ teamMember }) => {
  return <Text>{teamMember}</Text>;
};

export default AtbTeamMember;
