import { PagePaths } from '@/constants';
import { useLocation } from 'react-router-dom';

const useIsAboutPage = (): boolean => {
  const { pathname } = useLocation();

  const isAboutPage = pathname === PagePaths.about;

  return isAboutPage;
};

export default useIsAboutPage;
