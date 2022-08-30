type PageType = {
  id: string;
  page: string;
  blog: any;
};

type BlogListType = {
  tab: string;
  pages: PageType[];
};

const blogContent: BlogListType[] = [
  {
    tab: 'Shopify',
    pages: [
      {
        id: 'shopify-market',
        page: 'Shopify Market',
        blog: 'shopify-market',
      },
      {
        id: 'shopify-app',
        page: 'Shopify App',
        blog: '',
      },
    ],
  },
  {
    tab: 'Rust',
    pages: [
      {
        id: 'rust-beginners',
        page: 'Rust Beginners',
        blog: '',
      },
      {
        id: 'rust-intermediate',
        page: 'Rust Intermediate',
        blog: '',
      },
    ],
  },
];

export default blogContent;
