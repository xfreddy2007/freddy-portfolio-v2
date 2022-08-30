import React from 'react';
import BlogContent from './BlogContent';
import style from './BlogComponent.module.scss';

const BlogComponent: React.FC = () => {
  return (
    <div className={style.root}>
      <BlogContent />
      <div>Template</div>
    </div>
  );
};

export default BlogComponent;
