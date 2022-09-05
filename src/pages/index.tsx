import React from 'react';
import { Helmet } from 'react-helmet';
import HomepageIntro from '../components/HomepageIntro';
import HomepageInfo from '../components/HomepageInfo';
import HomepageCarousell from '../components/HomepageCarousell';
import HomepageQuote from '../components/HomepageQuote';

const HomePage: React.FC = () => {
  return (
    <div className="mx-auto max-w-[1920px]">
      <Helmet>
        <title>Freddy Liu - Builds things that interest You!</title>
        <meta property="og:title" content="Freddy Liu - Builds things that interest You!" />
        <meta property="og:url" content="https://www.freddyliu.me/" />
        <link rel="canonical" href="https://www.freddyliu.me/" />
      </Helmet>
      <HomepageIntro />
      <HomepageInfo />
      <HomepageCarousell />
      <HomepageQuote />
    </div>
  );
};

export default HomePage;
