import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { FC } from 'react';
import AtbContentContainer from '@AtbProjectDetailsComponents/AtbContentContainer';
import { IProps } from './AtbProjectTeamSection.types';
import { Container, Section } from './AtbProjectTeamSection.styled';
import AtbClientTeamList from '@AtbProjectDetailsComponents/AtbClientTeamList';
import AtbSunAgencyTeamList from '@AtbProjectDetailsComponents/AtbSunAgencyTeamList';

const AtbProjectTeamSection: FC<IProps> = ({
  clientTeam,
  clientTeamTitle,
  sunAgencyTeamTitle,
  sunAgencyTeam,
}) => {
  return (
    <Section>
      <GeneralContainer>
        <Container>
          <AtbContentContainer title={clientTeamTitle}>
            <AtbClientTeamList team={clientTeam} />
          </AtbContentContainer>
          <AtbContentContainer title={sunAgencyTeamTitle}>
            <AtbSunAgencyTeamList team={sunAgencyTeam} />
          </AtbContentContainer>
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default AtbProjectTeamSection;
