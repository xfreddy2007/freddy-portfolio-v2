import matter from 'gray-matter';

export type BlogsType = {
  [property: string]: any;
};

const modules = import.meta.glob('../pages/blogs/**/*.mdx');

export default async function getPosts() {
  const blogs: BlogsType = {};
  for (const path in modules) {
    const blogName = path.split('/')[4].replace('.mdx', '');
    const module = await modules[path]();
    blogs[blogName] = module;
  }
  return blogs;
  // const postsDirectory = path.join(import.meta.cwd(), 'src', 'pages', 'blogs');
  // const dirFolders = fs
  //   .readdirSync(postsDirectory, {
  //     withFileTypes: true,
  //   })
  //   .filter((file) => file.isDirectory());
  // const postGroupList = dirFolders.map((folder) => {
  //   const folderFiles = fs.readdirSync(`${postsDirectory}/${folder.name}`, {
  //     withFileTypes: true,
  //   });
  //   const posts = folderFiles
  //     .map((file) => {
  //       if (!file.name.endsWith('.mdx')) return;

  //       const fileContent = fs.readFileSync(`${postsDirectory}/${folder.name}/${file.name}`, 'utf-8');
  //       const { data, content } = matter(fileContent);

  //       const slug = `${folder.name}/${file.name.replace(/.mdx$/, '')}`;
  //       return { data, slug, content };
  //     })
  //     .filter(Boolean);

  //   return {
  //     groupName: folder.name,
  //     posts,
  //   };
  // });

  // return postGroupList;
}
