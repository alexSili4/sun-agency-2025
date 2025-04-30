import { FC, useEffect, useState } from 'react';
import { Content, Form, InputsWrap } from './HeroSectionContactsForm.styled';
import HeroSectionContactsFormInput from '@ContactsPageComponents/HeroSectionContactsFormInput';
import { FormErrorMessages, regExp } from '@/constants';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AxiosError } from 'axios';
import {
  getInvalidContactsFormFields,
  getContactsFormErrorMessage,
  getContactsFormServicesBtnTitle,
} from '@/utils';
import { IProps } from './HeroSectionContactsForm.types';
import { IContactsFormData } from '@/types/contacts.types';
import GlowingFormBtn from '@ContactsPageComponents/GlowingFormBtn';

const HeroSectionContactsForm: FC<IProps> = ({
  updateError,
  updateIsSuccess,
  updateInvalidFields,
  isInvalidNameField,
  isInvalidPhoneField,
  isInvalidEmailField,
  gapDesk,
  rowLength,
  services,
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

  const updateDisabled = (data: boolean) => {
    setDisabled(data);
  };

  const handleFormSubmit: SubmitHandler<IContactsFormData> = async (data) => {
    try {
      updateInvalidFields(null);
      updateError(null);
      updateDisabled(true);

      // TODO fix
      // await appService.reserved(data);
      console.log(data);
      updateIsSuccess(true);
    } catch (error) {
      if (error instanceof AxiosError && error.status === 422) {
        const errors = error.response?.data;
        const { errorMessage, invalidFields } =
          getInvalidContactsFormFields(errors);

        updateInvalidFields(invalidFields);
        updateError(errorMessage);
      }
    } finally {
      updateDisabled(false);
    }
  };

  useEffect(() => {
    const errorMessages = getContactsFormErrorMessage(errors);

    if (errorMessages.length) {
      const { errorMessage, invalidFields } =
        getInvalidContactsFormFields(errorMessages);

      updateInvalidFields(invalidFields);
      updateError(errorMessage);
    }
  }, [isSubmitting, errors]);

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Content>
        <InputsWrap rowGapDesk={gapDesk}>
          <HeroSectionContactsFormInput
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
