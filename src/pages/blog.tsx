import React from 'react';
import { Helmet } from 'react-helmet';

const BlogPage: React.FC = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1920px] items-center justify-center bg-white pt-16 dark:bg-black dark:text-white">
      <Helmet>
        <title>Blogs - Freddy Liu</title>
        <meta property="og:title" content="Blogs - Freddy Liu" />
        <meta property="og:url" content="https://www.freddyliu.io/" />
        <link rel="canonical" href="https://www.freddyliu.io/" />
      </Helmet>
      <h1 className="h1">Coming Soon!</h1>
    </div>
  );
};

export default BlogPage;
