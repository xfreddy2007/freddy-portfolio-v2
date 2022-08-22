import React from 'react';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { switchCategorySelection } from '@/src/feature/projectDisplay';
import { ReactComponent as CloseIcon } from '@/src/assets/icon-close.svg';
import style from './CategoryBtn.module.scss';

type CategoryBtnProps = {
  category: string;
  categoryId: 'featureProjects' | 'frontEnd' | 'backEnd' | 'fullStack';
};

const CategoryBtn: React.FC<CategoryBtnProps> = ({ category, categoryId }) => {
  // redux tookit: selection list
  const categoryList = useAppSelector((state) => state.projectDisplay.categoryList);
  const dispatch = useAppDispatch();
  const isSelected = categoryList.includes(categoryId);
  // redux tookit: dark mode
  const mode = useAppSelector((state) => state.switchThemeMode.mode);
  const isDarkMode = mode === 'dark';

  return (
    <button
      className={style.root}
      data-dark-mode={isDarkMode}
      data-is-selected={isSelected}
      onClick={() => dispatch(switchCategorySelection(categoryId))}
    >
      <span className="whitespace-nowra p w-fit font-bold">{category}</span>
      {isSelected && <CloseIcon />}
    </button>
  );
};

export default React.memo(CategoryBtn);
