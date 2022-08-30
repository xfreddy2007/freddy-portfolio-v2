import React from 'react';
import { Helmet } from 'react-helmet';
import AboutIntro from '../components/AboutIntro';
import AboutSkills from '../components/AboutSkills';
import AboutCertification from '../components/AboutCertification/Index';

// image production path
const aboutPicUrl = new URL('../assets/about_pic.jpeg', import.meta.url).href;

const AboutPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-[1920px]">
      <Helmet>
        <title>About me - Freddy Liu</title>
        <meta property="og:title" content="About me - Freddy Liu" />
        <meta property="og:url" content="https://www.freddyliu.me/" />
        <link rel="canonical" href="https://www.freddyliu.me/" />
      </Helmet>
      <div className="w-full">
        <img src={aboutPicUrl} className="w-full" loading="lazy" />
      </div>
      <AboutIntro />
      <AboutSkills />
      <AboutCertification />
    </div>
  );
};

export default AboutPage;
