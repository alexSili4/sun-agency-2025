import { FC } from 'react';
import { IProps } from './AtbClientTeamList.types';
import { List, ListItem } from './AtbClientTeamList.styled';
import AtbClientTeamMember from '@/components/ProjectDetailsPage/AtbTeamMember';

const AtbClientTeamList: FC<IProps> = ({ team }) => {
  return (
    <List>
      {team.map((teamMember) => (
        <ListItem key={teamMember}>
          <AtbClientTeamMember teamMember={teamMember} />
        </ListItem>
      ))}
    </List>
  );
};

export default AtbClientTeamList;
