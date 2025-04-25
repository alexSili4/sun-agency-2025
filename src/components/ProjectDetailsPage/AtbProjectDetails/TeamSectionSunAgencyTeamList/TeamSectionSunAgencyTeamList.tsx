import { FC } from 'react';
import { IProps } from './TeamSectionSunAgencyTeamList.types';
import {
  List,
  DevelopersListItem,
  BottomListItem,
  ListItem,
} from './TeamSectionSunAgencyTeamList.styled';
// ----- components
import TeamSectionSunAgencyTargetTeam from '@AtbProjectDetailsComponents/TeamSectionSunAgencyTargetTeam';

const TeamSectionSunAgencyTeamList: FC<IProps> = ({ team }) => {
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
        <TeamSectionSunAgencyTargetTeam title={uiUxTeamTitle} team={uiUxTeam} />
      </ListItem>
      <ListItem>
        <TeamSectionSunAgencyTargetTeam
          title={managementTeamTitle}
          team={managementTeam}
        />
      </ListItem>
      <DevelopersListItem>
        <TeamSectionSunAgencyTargetTeam
          title={developersTeamTitle}
          team={developersTeam}
        />
      </DevelopersListItem>
      <BottomListItem>
        <TeamSectionSunAgencyTargetTeam
          title={contentTeamTitle}
          team={contentTeam}
        />
      </BottomListItem>
      <BottomListItem>
        <TeamSectionSunAgencyTargetTeam title={qaTeamTitle} team={qaTeam} />
      </BottomListItem>
    </List>
  );
};

export default TeamSectionSunAgencyTeamList;
