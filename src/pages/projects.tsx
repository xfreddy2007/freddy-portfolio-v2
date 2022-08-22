import React from 'react';
import { Helmet } from 'react-helmet';
// import ReactDOMServer from 'react-dom/server';
// import Tooltip from '../components/Tooltip';
import ProjectSelectionBar from '../components/ProjectSelectionBar';
import ProjectTemplate from '../components/ProjectTemplate';

const ProjectPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-[1920px] bg-white pt-16 dark:bg-black dark:text-white md:pt-20 xl:pt-28">
      <Helmet>
        <title>Projects - Freddy Liu</title>
        <meta property="og:title" content="Projects - Freddy Liu" />
        <meta property="og:url" content="https://www.freddyliu.io/" />
        <link rel="canonical" href="https://www.freddyliu.io/" />
      </Helmet>
      <h1 className="font-ralway h1 text-center font-black">Projects</h1>
      <ProjectSelectionBar />
      <ProjectTemplate />
    </div>
  );
};

export default ProjectPage;
