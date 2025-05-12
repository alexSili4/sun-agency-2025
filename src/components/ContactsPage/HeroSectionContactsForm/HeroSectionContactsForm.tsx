import { FC, useEffect, useState } from 'react';
import { Content, Form, InputsWrap } from './HeroSectionContactsForm.styled';
import HeroSectionContactsFormInput from '@ContactsPageComponents/HeroSectionContactsFormInput';
import { FormErrorMessages, regExp } from '@/constants';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AxiosError } from 'axios';
import {
  getContactsFormErrorMessages,
  getContactsFormServicesBtnTitle,
  getContactFormFieldErrorMessage,
} from '@/utils';
import { IProps } from './HeroSectionContactsForm.types';
import { IContactsFormData } from '@/types/contacts.types';
import GlowingFormBtn from '@ContactsPageComponents/GlowingFormBtn';
import appService from '@/services/app.service';

const HeroSectionContactsForm: FC<IProps> = ({
  updateErrors,
  updateIsSuccess,
  isInvalidNameField,
  isInvalidPhoneField,
  isInvalidEmailField,
  gapDesk,
  rowLength,
  services,
  errorMessages,
}) => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    watch,
  } = useForm<IContactsFormData>();
  const checkedServices = watch('services');
  const { isDefaultBtnTitle, btnTitle } =
    getContactsFormServicesBtnTitle(checkedServices);

  const phoneNumberStart = '+380';
  const phoneInputMask = `${phoneNumberStart} __ ___ ____`;
  const phoneInputReplacement = { _: /\d/ };

  const { nameError, emailError, phoneError, servicesError, messageError } =
    getContactFormFieldErrorMessage(errorMessages);

  const updateDisabled = (data: boolean) => {
    setDisabled(data);
  };

  const handleFormSubmit: SubmitHandler<IContactsFormData> = async (data) => {
    try {
      updateErrors(null);
      updateDisabled(true);

      await appService.createFeedback(data);
      updateIsSuccess(true);
    } catch (error) {
      const isValidationErrors =
        error instanceof AxiosError && error.status === 422;

      if (isValidationErrors) {
        const errors = error.response?.data;

        updateErrors(errors.errors);
      }
    } finally {
      updateDisabled(false);
    }
  };

  useEffect(() => {
    const errorMessages = getContactsFormErrorMessages(errors);

    const keys = Object.keys(errorMessages);

    if (keys.length) {
      updateErrors(errorMessages);
    } else {
      updateErrors(null);
    }
  }, [isSubmitting, errors]);

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Content>
        <InputsWrap rowGapDesk={gapDesk}>
          <HeroSectionContactsFormInput
            error={nameError}
            gapDesk={gapDesk}
            rowLength={rowLength}
            title='Ім’я*'
            placeholder='Ваше ім’я'
            isInvalidField={isInvalidNameField}
            settings={{
              ...register('name', {
                required: {
                  message: FormErrorMessages.nameReqErr,
                  value: true,
                },
              }),
            }}
          />
          <HeroSectionContactsFormInput
            error={emailError}
            gapDesk={gapDesk}
            rowLength={rowLength}
            title='Email*'
            type='email'
            placeholder='your@mail.com'
            isInvalidField={isInvalidEmailField}
            settings={{
              ...register('email', {
                required: {
                  value: true,
                  message: FormErrorMessages.emailReqErr,
                },
                pattern: {
                  value: regExp.email,
                  message: FormErrorMessages.emailRegExpErr,
                },
              }),
            }}
          />
          <HeroSectionContactsFormInput
            error={phoneError}
            gapDesk={gapDesk}
            rowLength={rowLength}
            title='Телефон*'
            type='tel'
            placeholder={phoneNumberStart}
            isInvalidField={isInvalidPhoneField}
            phoneInputMask={phoneInputMask}
            phoneInputReplacement={phoneInputReplacement}
            settings={{
              ...register('phone', {
                required: {
                  value: true,
                  message: FormErrorMessages.phoneReqErr,
                },
              }),
            }}
          />
          <HeroSectionContactsFormInput
            error={servicesError}
            gapDesk={gapDesk}
            rowLength={rowLength}
            title='Послуги, що Вас цікавлять'
            settings={{
              ...register('services'),
            }}
            services={services}
            btnTitle={btnTitle}
            isDefaultBtnTitle={isDefaultBtnTitle}
          />
          <HeroSectionContactsFormInput
            error={messageError}
            gapDesk={gapDesk}
            rowLength={rowLength}
            title='Повідомлення'
            placeholder='Напишіть повідомлення...'
            settings={{ ...register('message') }}
            isTextArea
          />
        </InputsWrap>
        <GlowingFormBtn title='Надіслати' disabled={disabled} />
      </Content>
    </Form>
  );
};

export default HeroSectionContactsForm;
