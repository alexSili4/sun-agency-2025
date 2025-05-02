import { ICategories, Categories } from '@/types/clients.types';

const getClientsListCategories = (categories: ICategories): Categories => {
  const listCategories = Object.values(categories);

  return listCategories;
};

export default getClientsListCategories;
