import React, { Suspense, useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import Loading from './components/Loading';
import Welcome from './components/Welcome';

import routes from '~react-pages';

const App: React.FC = () => {
  // Deal with initial loading case
  const [isLoaded, setIsLoaded] = useState(false);
  const [isWelcomed, setIsWelcomed] = useState(false);
  useEffect(() => {
    const loading = setTimeout(() => setIsLoaded(true), 2000);
    const welcome = setTimeout(() => setIsWelcomed(true), 6000);
    return () => {
      clearTimeout(loading);
      clearTimeout(welcome);
    };
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      {!isLoaded && <Loading />}
      {!isWelcomed && <Welcome />}
      {useRoutes(routes)}
    </Suspense>
  );
};

export default App;
