import { ReactElement } from 'react';
import RustBeginners from './rust/rust-beginners.mdx';

type BlogPostsType = {
  [property: string]: ReactElement;
};

const blogPosts: BlogPostsType = {
  'rust-beginners': <RustBeginners />,
};

export default blogPosts;
