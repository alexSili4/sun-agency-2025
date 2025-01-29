import { FC } from 'react';
import AtbTeamMember from '@ProjectDetailsPageComponents/AtbTeamMember';
import { IProps } from './AtbSunAgencyTargetTeamList.types';
import { List, ListItem } from './AtbSunAgencyTargetTeamList.styled';

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
