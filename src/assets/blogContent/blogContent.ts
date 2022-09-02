type PageType = {
  id: string;
  page: string;
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
        id: 'shopify-hydrogen',
        page: 'Shopify Hydrogen',
      },
    ],
  },
  {
    tab: 'Rust',
    pages: [
      {
        id: 'rust-beginners',
        page: 'Rust Beginners',
      },
      {
        id: 'rust-intermediate',
        page: 'Rust Intermediate',
      },
    ],
  },
];

export default blogContent;
