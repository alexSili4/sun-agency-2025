import { FC } from 'react';
import { IProps } from './AtbSunAgencyTargetTeamList.types';
import { List, ListItem } from './AtbSunAgencyTargetTeamList.styled';
// ----- components
import AtbTeamMember from '@AtbProjectDetailsComponents/AtbTeamMember';

const AtbSunAgencyTargetTeamList: FC<IProps> = ({ team }) => {
  return (
    <List>
      {team.map((teamMember, index) => (
        <ListItem key={index}>
          <AtbTeamMember teamMember={teamMember} />
        </ListItem>
      ))}
    </List>
  );
};

export default AtbSunAgencyTargetTeamList;
