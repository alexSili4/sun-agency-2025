import { FC, lazy } from 'react';
import { PagePaths } from '@/constants';
import { Route, Routes } from 'react-router-dom';
// ----- components
import SharedLayout from '@GeneralComponents/SharedLayout';

const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const MainPage = lazy(() => import('@/pages/MainPage'));
const ProjectDetailsPage = lazy(() => import('@/pages/ProjectDetailsPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));

const App: FC = () => {
  return (
    <Routes>
      <Route path={PagePaths.root} element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path={PagePaths.root} element={<MainPage />} />
        <Route
          path={`${PagePaths.projects}/:${PagePaths.dynamicParam}`}
          element={<ProjectDetailsPage />}
        />
        <Route path={PagePaths.about} element={<AboutPage />} />
        <Route path={PagePaths.notFound} element={<NotFoundPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
