import { ReactElement } from 'react';
import RustBeginners from './rust/rust-beginners.mdx';
import RustIntermediate from './rust/rust-intermediate.mdx';

type BlogPostsType = {
  [property: string]: ReactElement;
};

const blogPosts: BlogPostsType = {
  'rust-beginners': <RustBeginners />,
  'rust-intermediate': <RustIntermediate />,
};

export default blogPosts;
