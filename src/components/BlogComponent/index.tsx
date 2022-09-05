import React from 'react';
import BlogContent from './BlogContent';
import BlogTemaplte from './BlogTemplate';
import { useAppSelector } from '@/src/store/hooks';
import style from './BlogComponent.module.scss';

const BlogComponent: React.FC = () => {
  // redux tookit: blog display
  const blogId = useAppSelector((state) => state.blogDisplay.activeBlogId);
  return (
    <div className={style.root}>
      <BlogContent />
      {blogId ? (
        <BlogTemaplte />
      ) : (
        <div className="font-source-code flex min-h-screen flex-1 flex-col items-center justify-center px-2 md:px-6 lg:px-10">
          <h1 className="h1 max-w-[800px] text-center font-bold">Freddy's Blog</h1>
          <h2 className="h5 mt-2 max-w-[800px] text-center lg:mt-6">
            It's a place where I put my own notes and project roadmaps. Take a look!
          </h2>
        </div>
      )}
    </div>
  );
};

export default BlogComponent;
