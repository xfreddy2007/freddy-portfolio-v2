import React, { Suspense, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useRoutes } from 'react-router-dom';
import Header from './components/Header';
import Loading from './components/Loading';
import Welcome from './components/Welcome';

import useDarkMode from './utils/hooks/useDarkMode';

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

  const { isDarkMode } = useDarkMode();
  useEffect(() => console.log(isDarkMode, 'App.js'), [isDarkMode]);

  return (
    <Suspense fallback={<Loading />}>
      <Helmet>
        <meta charSet="utf-8" />
        {/* <meta property="og:image" content="https://assets.positivegrid.com/media/uploader/official-smo.jpg" /> */}
        <meta
          property="og:description"
          content="Fully passionate in Web Development. Problem solving, critical thinking, providing intuitive, responsive and creative designs for users."
        />
        <link href="/src/assets/favicon.png" rel="icon" />
      </Helmet>
      {/* {!isLoaded && <Loading />} */}
      {/* {!isWelcomed && <Welcome />} */}
      <Header />
      {useRoutes(routes)}
    </Suspense>
  );
};

export default App;
