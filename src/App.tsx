import React, { Suspense, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useRoutes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Welcome from './components/Welcome';
import { useAppSelector } from '@/src/store/hooks';

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

  // initial add dark mode class
  const mode = useAppSelector((state) => state.switchThemeMode.mode);
  useEffect(() => {
    document.documentElement.classList.add(mode);
  }, [mode]);

  // session for loading and welcome show
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (sessionStorage.getItem('visited') === 'true') {
      setIsLoaded(true);
      setIsWelcomed(true);
    } else {
      timer = setTimeout(() => {
        sessionStorage.setItem('visited', 'true');
        setIsWelcomed(true);
      }, 6000);
    }

    return () => clearTimeout(timer);
  }, []);

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
      {!isLoaded && <Loading />}
      {!isWelcomed && <Welcome />}
      <Header />
      {useRoutes(routes)}
      <Footer />
    </Suspense>
  );
};

export default App;
