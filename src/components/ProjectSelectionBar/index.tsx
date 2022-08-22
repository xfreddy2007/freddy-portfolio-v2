import React, { SyntheticEvent, useCallback, useEffect } from 'react';
import CategoryBtn from './CategoryBtn';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { switchCategorySelection, searchProject } from '@/src/feature/projectDisplay';
import { ReactComponent as SearchIcon } from '@/src/assets/icon-search.svg';
import categorySelection from './categoryList';
import debounce from '@/src/utils/debounce';
import style from './ProjectSelectionBar.module.scss';

const ProjectSelectionBar: React.FC = () => {
  // redux tookit: selection list & search
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
  }, [searchParams]);

  const searchTextHandler = useCallback(
    debounce((text: string) => dispatch(searchProject(text)), 500),
    [debounce],
  );

  const onChangeHandler = useCallback((e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    searchTextHandler(target.value);
  }, []);

  return (
    <div className={style.root}>
      <div className={style.input} data-dark-mode={isDarkMode}>
        <SearchIcon />
        <input className={style.input} type="text" placeholder="Search" onChange={onChangeHandler} />
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
