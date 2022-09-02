declare module '*.scss';
declare module '*.mdx';
interface ImportMeta {
  glob: (...args: any[]) => any;
}
