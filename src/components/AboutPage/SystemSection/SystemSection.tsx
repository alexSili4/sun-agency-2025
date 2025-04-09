import { FC } from 'react';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import AboutPageSectionTitle from '@AboutPageComponents/AboutPageSectionTitle';
import { Container, Section, Content } from './SystemSection.styled';
import { PagePaths } from '@/constants';
import GlowingLink from '@AboutPageComponents/GlowingLink';
import { IProps } from './SystemSection.types';
import SystemSectionSystemSchema from '@AboutPageComponents/SystemSectionSystemSchema';

const SystemSection: FC<IProps> = ({ system }) => {
  return (
    <Section>
      <GeneralContainer>
        <Container>
          <AboutPageSectionTitle title='Система' />
          <Content>
            <SystemSectionSystemSchema system={system} />
            <GlowingLink title='Дізнатись більше' href={PagePaths.system} />
          </Content>
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default SystemSection;
