import { contacts } from '@/constants';

const getContactsFormServiceByValue = (service: string): string => {
  const targetService = contacts.services.find(
    ({ value }) => value === service
  );
  const label = targetService ? targetService.label : '';

  return label;
};

export default getContactsFormServiceByValue;
