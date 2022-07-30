import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import Loading from './components/Loading';
import useGetDOMContentLoad from './utils/hooks/useGetDOMContentLoad';

import routes from '~react-pages';

const App: React.FC = () => {
  const { domIsLoaded } = useGetDOMContentLoad();
  return <Suspense fallback={<Loading />}>{true ? <Loading /> : useRoutes(routes)}</Suspense>;
};

export default App;
//
