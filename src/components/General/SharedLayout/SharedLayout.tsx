import { FC, Suspense } from 'react';
import { Main } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { useFooterStartColor, useIsContactsPage } from '@/hooks';
// ----- components
import Loader from '@GeneralComponents/Loader';
import Header from '@GeneralComponents/Header';
import Footer from '@GeneralComponents/Footer';

const SharedLayout: FC = () => {
  const startColor = useFooterStartColor();
  const isContactsPage = useIsContactsPage();

  const showContactsInfo = !isContactsPage;

  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer startColor={startColor} showContactsInfo={showContactsInfo} />
    </>
  );
};

export default SharedLayout;
