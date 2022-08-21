import React, { useEffect } from 'react';
import CategoryBtn from './CategoryBtn';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { switchCategorySelection } from '@/src/feature/projectDisplay';
import { ReactComponent as SearchIcon } from '@/src/assets/icon-search.svg';
import categorySelection from './categoryList';
import style from './ProjectSelectionBar.module.scss';

const ProjectSelectionBar: React.FC = () => {
  // redux tookit: selection list
  const dispatch = useAppDispatch();
  // redux tookit: dark mode
  const mode = useAppSelector((state) => state.switchThemeMode.mode);
  const isDarkMode = mode === 'dark';

  // query params pre select
  const [searchParams, _] = useSearchParams();
  useEffect(() => {
    const query = searchParams.get('category')?.split(',');
    query &&
      query.forEach((key: string) => {
        dispatch(switchCategorySelection(key));
      });
  }, [searchParams, dispatch]);

  return (
    <div className={style.root}>
      <div className={style.input} data-dark-mode={isDarkMode}>
        <SearchIcon />
        <input className={style.input} type="text" placeholder="Search" />
      </div>
      <div className={style.categoryContainer}>
        {categorySelection.map((selection) => {
          return <CategoryBtn key={selection.id} category={selection.title} categoryId={selection.id} />;
        })}
      </div>
    </div>
  );
};

export default ProjectSelectionBar;
