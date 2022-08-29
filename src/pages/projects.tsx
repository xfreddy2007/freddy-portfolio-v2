import React from 'react';
import { Helmet } from 'react-helmet';
import ProjectSelectionBar from '../components/ProjectSelectionBar';
import ProjectTemplate from '../components/ProjectTemplate';

const ProjectPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-[1920px] bg-white pt-16 pb-60 dark:bg-black dark:text-white md:pt-20 md:pb-64 xl:py-28 xl:pb-56">
      <Helmet>
        <title>Projects - Freddy Liu</title>
        <meta property="og:title" content="Projects - Freddy Liu" />
        <meta property="og:url" content="https://www.freddyliu.me/" />
        <link rel="canonical" href="https://www.freddyliu.me/" />
      </Helmet>
      <h1 className="font-ralway h1 text-center font-black">Projects</h1>
      <ProjectSelectionBar />
      <ProjectTemplate />
    </div>
  );
};

export default ProjectPage;
