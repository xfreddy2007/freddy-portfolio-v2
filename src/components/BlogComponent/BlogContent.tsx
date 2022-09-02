import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/src/store/hooks';
import { setActiveBlog } from '@/src/feature/blogDisplay';
import useMediaMatch from '@/src/utils/hooks/useMediaMatch';
import blogContent from '@/src/assets/blogContent/blogContent';
import { ReactComponent as DownArrowIcon } from '@/src/assets/icon-down-arrow.svg';
import style from './BlogContent.module.scss';

const BlogContent: React.FC = () => {
  // redux tookit: dark mode
  const mode = useAppSelector((state) => state.switchThemeMode.mode);
  const isDarkMode = mode === 'dark';
  // redux tookit: blog display
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);
  // desktop media
  const isDesktop = useMediaMatch('(min-width: 1024px)');
  useEffect(() => {
    if (!isDesktop && isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, isDesktop]);

  return (
    <div className={style.root} data-open={isOpen}>
      <div className={style.contentBlock} data-dark-mode={isDarkMode} data-open={isOpen}>
        {blogContent.map((tab) => {
          return (
            <div key={tab.tab}>
              <span className="mb-2 border-l-4 border-solid border-black pl-2 text-base font-bold dark:border-white lg:text-xl">
                {tab.tab}
              </span>
              <div className="ml-5 flex flex-col gap-2 lg:gap-4">
                {tab.pages.map((blog) => {
                  return (
                    <button
                      key={blog.id}
                      className="text-left text-base transition-all duration-300 hover:pl-2 lg:text-xl"
                      onClick={() => dispatch(setActiveBlog(blog.id))}
                    >
                      {blog.page}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
        <DownArrowIcon
          className={style.arrow}
          data-open={isOpen}
          data-dark-mode={isDarkMode}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
      {isOpen && <div className={style.blurModal} onClick={() => setIsOpen(false)} />}
    </div>
  );
};

export default BlogContent;
