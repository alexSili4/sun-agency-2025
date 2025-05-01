import { Symbols } from '@/constants';
import { IGetContactsFormServicesBtnTitle } from '@/types/functions.types';
import { Strings } from '@/types/types';
import getContactsFormServiceByValue from './getContactsFormServiceByValue';

const getContactsFormServicesBtnTitle = (
  services: undefined | boolean | Strings
): IGetContactsFormServicesBtnTitle => {
  const isArray = Array.isArray(services);
  const isLength = isArray && Boolean(services.length);

  const defaultTitle = 'Оберіть';

  const btnTitle = isLength
    ? services
        .map((service) => getContactsFormServiceByValue(service))
        .join(Symbols.comma)
    : defaultTitle;

  const isDefaultBtnTitle = btnTitle === defaultTitle;

  return { isDefaultBtnTitle, btnTitle };
};

export default getContactsFormServicesBtnTitle;
