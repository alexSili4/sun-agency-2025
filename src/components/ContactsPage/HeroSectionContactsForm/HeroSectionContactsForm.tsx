import { FC } from 'react';
import {
  Background,
  Container,
  Form,
  InputsWrap,
  Content,
} from './HeroSectionContactsForm.styled';
import HeroSectionContactsFormInput from '@ContactsPageComponents/HeroSectionContactsFormInput';

const HeroSectionContactsForm: FC = () => {
  return (
    <Container>
      <Background>
        <Form>
          <Content>
            <InputsWrap>
              <HeroSectionContactsFormInput title='Ім’я*' />
              <HeroSectionContactsFormInput title='Email*' />
              <HeroSectionContactsFormInput title='Телефон*' />
              <HeroSectionContactsFormInput title='Послуги, що Вас цікавлять' />
              <HeroSectionContactsFormInput title='Повідомлення' isTextArea />
            </InputsWrap>
          </Content>
        </Form>
      </Background>
    </Container>
  );
};

export default HeroSectionContactsForm;
