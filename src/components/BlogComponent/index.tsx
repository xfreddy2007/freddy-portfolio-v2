import React from 'react';
import BlogContent from './BlogContent';
import BlogTemaplte from './BlogTemplate';
import style from './BlogComponent.module.scss';

const BlogComponent: React.FC = () => {
  return (
    <div className={style.root}>
      <BlogContent />
      <BlogTemaplte />
    </div>
  );
};

export default BlogComponent;
