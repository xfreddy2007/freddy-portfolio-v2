import React, { useState, useEffect } from 'react';
import { useAppSelector } from '@/src/store/hooks';
import blogPosts from '@/src/assets/blogContent/blogPosts';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../MDXComponents';
import style from './BlogTemplate.module.scss';

const BlogTemaplte: React.FC = () => {
  // redux tookit: blog display
  const blogId = useAppSelector((state) => state.blogDisplay.activeBlogId);
  // redux tookit: dark mode
  const mode = useAppSelector((state) => state.switchThemeMode.mode);
  const isDarkMode = mode === 'dark';

  return (
    // @ts-ignore
    <MDXProvider components={MDXComponents}>
      <div className={style.root} data-dark-mode={isDarkMode}>
        <div className={style.postContainer}>{blogPosts[blogId]}</div>
      </div>
    </MDXProvider>
  );
};

export default BlogTemaplte;
