import { FC, Suspense } from 'react';
import { Main } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
// ----- components
import Loader from '@GeneralComponents/Loader';
import Header from '@GeneralComponents/Header';
import Footer from '@GeneralComponents/Footer';
import { theme } from '@/constants';
import { useIsAboutPage } from '@/hooks';

const SharedLayout: FC = () => {
  const isAboutPage = useIsAboutPage();

  const startColor = isAboutPage ? theme.colors.dark : theme.colors.black;

  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer startColor={startColor} />
    </>
  );
};

export default SharedLayout;
