import { theme } from '@/constants';
import useIsAboutPage from './useIsAboutPage';
import useIsClientsPage from './useIsClientsPage';

const useFooterStartColor = () => {
  const isAboutPage = useIsAboutPage();
  const isClientsPage = useIsClientsPage();

  const isDarkPageColor = isAboutPage || isClientsPage;

  const startColor = isDarkPageColor ? theme.colors.dark : theme.colors.black;

  return startColor;
};

export default useFooterStartColor;
