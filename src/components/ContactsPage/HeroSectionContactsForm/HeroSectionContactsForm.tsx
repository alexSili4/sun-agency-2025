import { FC, useEffect, useState } from 'react';
import { Form, InputsWrap } from './HeroSectionContactsForm.styled';
import HeroSectionContactsFormInput from '@ContactsPageComponents/HeroSectionContactsFormInput';
import { useMask } from '@react-input/mask';
import { FormErrorMessages, regExp } from '@/constants';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AxiosError } from 'axios';
import {
  getInvalidContactsFormFields,
  getContactsFormErrorMessage,
} from '@/utils';
import { IProps } from './HeroSectionContactsForm.types';
import { IContactsFormData } from '@/types/contacts.types';

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
  } = useForm<IContactsFormData>();

  const phoneNumberStart = '+380';
  const phoneInputRef = useMask({
    mask: `${phoneNumberStart} __ ___ ____`,
    replacement: { _: /\d/ },
  });

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
          inputRef={phoneInputRef}
          isInvalidField={isInvalidPhoneField}
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
          settings={{ ...register('services') }}
          services={services}
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
    </Form>
  );
};

export default HeroSectionContactsForm;
