import { FC } from 'react';
import { IProps } from './TeamSectionSunAgencyTargetTeamList.types';
import { List, ListItem } from './TeamSectionSunAgencyTargetTeamList.styled';
// ----- components
import TeamSectionTeamMember from '@AtbProjectDetailsComponents/TeamSectionTeamMember';

const TeamSectionSunAgencyTargetTeamList: FC<IProps> = ({ team }) => {
  return (
    <List>
      {team.map((teamMember, index) => (
        <ListItem key={index}>
          <TeamSectionTeamMember teamMember={teamMember} />
        </ListItem>
      ))}
    </List>
  );
};

export default TeamSectionSunAgencyTargetTeamList;
