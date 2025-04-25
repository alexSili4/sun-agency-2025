import { FC } from 'react';
import { IProps } from './TeamSectionClientTeamList.types';
import { List, ListItem } from './TeamSectionClientTeamList.styled';
// ----- components
import TeamSectionTeamMember from '@AtbProjectDetailsComponents/TeamSectionTeamMember';

const TeamSectionClientTeamList: FC<IProps> = ({ team }) => {
  return (
    <List>
      {team.map((teamMember) => (
        <ListItem key={teamMember}>
          <TeamSectionTeamMember teamMember={teamMember} />
        </ListItem>
      ))}
    </List>
  );
};

export default TeamSectionClientTeamList;
