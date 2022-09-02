import React from 'react';
import { Helmet } from 'react-helmet';
import BlogComponent from '../../components/BlogComponent';

const BlogPage: React.FC = () => {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[1920px]">
      <Helmet>
        <title>Blogs - Freddy Liu</title>
        <meta property="og:title" content="Blogs - Freddy Liu" />
        <meta property="og:url" content="https://www.freddyliu.me/" />
        <link rel="canonical" href="https://www.freddyliu.me/" />
      </Helmet>
      <BlogComponent />
    </div>
  );
};

export default BlogPage;
