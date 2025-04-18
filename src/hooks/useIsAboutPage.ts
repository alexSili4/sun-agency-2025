import { PagePaths } from '@/constants';
import { useLocation } from 'react-router-dom';

const useIsAboutPage = (): boolean => {
  const { pathname } = useLocation();

  const isCabinetPage = pathname === PagePaths.about;

  return isCabinetPage;
};

export default useIsAboutPage;
