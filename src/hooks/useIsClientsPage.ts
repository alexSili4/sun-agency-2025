import { PagePaths } from '@/constants';
import { useLocation } from 'react-router-dom';

const useIsClientsPage = (): boolean => {
  const { pathname } = useLocation();

  const isClientsPage = pathname === PagePaths.clients;

  return isClientsPage;
};

export default useIsClientsPage;
