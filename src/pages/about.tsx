import React from 'react';
import { Helmet } from 'react-helmet';
import AboutIntro from '../components/AboutIntro';
import AboutSkills from '../components/AboutSkills';

const AboutPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-[1920px] bg-white dark:bg-black dark:text-white">
      <Helmet>
        <title>About me - Freddy Liu</title>
        <meta property="og:title" content="About me - Freddy Liu" />
        <meta property="og:url" content="https://www.freddyliu.io/" />
        <link rel="canonical" href="https://www.freddyliu.io/" />
      </Helmet>
      <div className="w-full">
        <img src="/src/assets/about_pic.jpeg" className="w-full" loading="lazy" />
      </div>
      <AboutIntro />
      <AboutSkills />
    </div>
  );
};

export default AboutPage;
