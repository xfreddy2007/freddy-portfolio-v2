import React from 'react';
import { Helmet } from 'react-helmet';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black dark:text-white">
      <Helmet>
        <title>Freddy Liu - Builds things that interest You!</title>
        <meta property="og:title" content="Freddy Liu - Builds things that interest You!" />
        <meta property="og:url" content="https://www.freddyliu.io/" />
        <link rel="canonical" href="https://www.freddyliu.io/" />
      </Helmet>
      Hello world!
    </div>
  );
};

export default HomePage;
