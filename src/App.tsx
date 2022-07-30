import React, { Suspense, useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import Loading from './components/Loading';

import routes from '~react-pages';

const App: React.FC = () => {
  // Deal with initial loading case
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const loading = setTimeout(() => setIsLoaded(true), 3000);
    return () => clearTimeout(loading);
  }, []);

  // dark mode toggle

  return (
    <Suspense fallback={<Loading />}>
      {/* {!isLoaded && <Loading />} */}
      {true && <Loading />}
      {useRoutes(routes)}
    </Suspense>
  );
};

export default App;
//
