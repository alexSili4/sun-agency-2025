import { theme } from '@/constants';
import useIsAboutPage from './useIsAboutPage';

const useFooterStartColor = () => {
  const isAboutPage = useIsAboutPage();

  const startColor = isAboutPage ? theme.colors.dark : theme.colors.black;

  return startColor;
};

export default useFooterStartColor;
