import { employees, PagePaths } from '@/constants';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { FC } from 'react';
import GlowingLink from '@AboutPageComponents/GlowingLink';
import { Section, Container, Content } from './EmployeesSection.styled';
import AnimatedEmployeesSectionTitle from '@AnimationBlocks/AnimatedEmployeesSectionTitle';
import EmployeesSectionList from '@AboutPageComponents/EmployeesSectionList';

const EmployeesSection: FC = () => {
  return (
    <Section>
      <GeneralContainer>
        <Container>
          <AnimatedEmployeesSectionTitle />
          <Content>
            <EmployeesSectionList employees={employees} />
            <GlowingLink
              title='Кар’єра та вакансії'
              href={PagePaths.vacancies}
            />
          </Content>
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default EmployeesSection;
