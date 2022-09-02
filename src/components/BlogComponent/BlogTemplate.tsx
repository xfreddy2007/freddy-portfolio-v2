import React, { useState, useEffect } from 'react';
import { useAppSelector } from '@/src/store/hooks';
import getPosts, { BlogsType } from '@/src/utils/getPosts';

const modules = import.meta.glob('../pages/blogs/**/*.mdx', { eager: true, as: 'raw' });
const blogs: BlogsType = {};
for (const path in modules) {
  const blogName = path.split('/')[4].replace('.mdx', '');
  const module = await modules[path]();
  blogs[blogName] = module;
}

const BlogTemaplte: React.FC = () => {
  // redux tookit: blog display
  const blogId = useAppSelector((state) => state.blogDisplay.activeBlogId);
  // const [blogs, setBlogs] = useState<BlogsType>({});
  // useEffect(() => {
  //   (async () => {
  //     const postList = await getPosts();
  //     setBlogs(postList);
  //   })();
  // }, []);
  // useEffect(() => console.log(blogs), [blogs]);
  console.log(modules);
  return (
    <div className="min-h-full w-full pt-16 lg:w-auto lg:flex-1">
      <div>Rust</div>
      <div>{blogs['rust-beginners']}</div>
    </div>
  );
};

export default BlogTemaplte;
