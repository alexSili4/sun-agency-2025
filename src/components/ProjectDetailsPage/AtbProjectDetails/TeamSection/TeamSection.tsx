import { FC } from 'react';
import { IProps } from './TeamSection.types';
import { Container, Section } from './TeamSection.styled';
// ----- components
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import ContentContainer from '@AtbProjectDetailsComponents/ContentContainer';
import TeamSectionClientTeamList from '@AtbProjectDetailsComponents/TeamSectionClientTeamList';
import TeamSectionSunAgencyTeamList from '@AtbProjectDetailsComponents/TeamSectionSunAgencyTeamList';

const TeamSection: FC<IProps> = ({
  clientTeam,
  clientTeamTitle,
  sunAgencyTeamTitle,
  sunAgencyTeam,
}) => {
  return (
    <Section>
      <GeneralContainer>
        <Container>
          <ContentContainer title={clientTeamTitle}>
            <TeamSectionClientTeamList team={clientTeam} />
          </ContentContainer>
          <ContentContainer title={sunAgencyTeamTitle}>
            <TeamSectionSunAgencyTeamList team={sunAgencyTeam} />
          </ContentContainer>
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default TeamSection;
