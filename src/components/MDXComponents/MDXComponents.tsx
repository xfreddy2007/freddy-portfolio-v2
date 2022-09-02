/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import styles from './MDXComponents.module.scss';

function isLink(str: unknown): boolean {
  if (!(typeof str === 'string')) return false;
  if (!str.includes('https://') && !str.includes('http://')) return false;
  return true;
}

type PropsType = {
  children: React.ReactNode;
};

const MDXComponents = {
  p: (props: PropsType) => {
    const { children } = props;
    if (isLink(children)) {
      const link = children as string;
      return <a {...props} href={link} className={styles.link} target="_blank" rel="noopener noreferrer" />;
    }
    return <p {...props} className={styles.p} />;
  },
  a: (props: PropsType) => <a {...props} className={styles.link} target="_blank" />,
  h1: (props: PropsType) => <h1 {...props} className={styles.h1} />,
  h2: (props: PropsType) => <h2 {...props} className={styles.h2} />,
  h3: (props: PropsType) => <h3 {...props} className={styles.h3} />,
  hr: (props: PropsType) => <hr {...props} className={styles.hr} />,
  pre: (props: PropsType) => <pre {...props} className={styles.pre} />,
  ul: (props: PropsType) => <ul {...props} className={styles.ul} />,
  ol: (props: PropsType) => <ol {...props} className={styles.ol} />,
  li: (props: PropsType) => <li {...props} className={styles.li} />,
  img: (props: PropsType) => <img {...props} className={styles.img} />,
};

export default MDXComponents;
