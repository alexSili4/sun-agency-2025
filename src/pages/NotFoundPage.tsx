import Container from '@GeneralComponents/Container';
import NotFound from '@ErrorPageComponents/NotFound';
import Section from '@GeneralComponents/Section';
import { FC } from 'react';

const NotFoundPage: FC = () => (
  <Section>
    <Container>
      <NotFound />
    </Container>
  </Section>
);

export default NotFoundPage;
