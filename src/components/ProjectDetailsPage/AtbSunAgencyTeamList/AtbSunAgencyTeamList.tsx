import { FC } from 'react';
import { IProps } from './AtbSunAgencyTeamList.types';
import AtbSunAgencyTargetTeam from '@ProjectDetailsPageComponents/AtbSunAgencyTargetTeam';
import {
  List,
  DevelopersListItem,
  BottomListItem,
  ListItem,
} from './AtbSunAgencyTeamList.styled';

const AtbSunAgencyTeamList: FC<IProps> = ({ team }) => {
  const {
    uiUx: { team: uiUxTeam, title: uiUxTeamTitle },
    management: { team: managementTeam, title: managementTeamTitle },
    developers: { team: developersTeam, title: developersTeamTitle },
    content: { team: contentTeam, title: contentTeamTitle },
    qa: { team: qaTeam, title: qaTeamTitle },
  } = team;

  return (
    <List>
      <ListItem>
        <AtbSunAgencyTargetTeam title={uiUxTeamTitle} team={uiUxTeam} />
      </ListItem>
      <ListItem>
        <AtbSunAgencyTargetTeam
          title={managementTeamTitle}
          team={managementTeam}
        />
      </ListItem>
      <DevelopersListItem>
        <AtbSunAgencyTargetTeam
          title={developersTeamTitle}
          team={developersTeam}
        />
      </DevelopersListItem>
      <BottomListItem>
        <AtbSunAgencyTargetTeam title={contentTeamTitle} team={contentTeam} />
      </BottomListItem>
      <BottomListItem>
        <AtbSunAgencyTargetTeam title={qaTeamTitle} team={qaTeam} />
      </BottomListItem>
    </List>
  );
};

export default AtbSunAgencyTeamList;
