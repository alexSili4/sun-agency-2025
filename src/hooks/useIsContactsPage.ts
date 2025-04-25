import { PagePaths } from '@/constants';
import { useLocation } from 'react-router-dom';

const useIsContactsPage = (): boolean => {
  const { pathname } = useLocation();

  const isContactsPage = pathname === PagePaths.contacts;

  return isContactsPage;
};

export default useIsContactsPage;
