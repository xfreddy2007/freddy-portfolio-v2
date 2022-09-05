import { ReactElement } from 'react';
import ShopifyHydrogen from './shopify/shopify-hydrogen.mdx';
import RustBeginners from './rust/rust-beginners.mdx';
import RustIntermediate from './rust/rust-intermediate.mdx';

type BlogPostsType = {
  [property: string]: ReactElement;
};

const blogPosts: BlogPostsType = {
  'shopify-hydrogen': <ShopifyHydrogen />,
  'rust-beginners': <RustBeginners />,
  'rust-intermediate': <RustIntermediate />,
};

export default blogPosts;
