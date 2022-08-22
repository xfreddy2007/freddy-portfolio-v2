import React from 'react';
import projectData from '@/src/assets/projectData/projectData';
import ProjectBlock from './ProjectBlock';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import style from './ProjectTemplate.module.scss';

const ProjectTemplate: React.FC = () => {
  // redux tookit: search
  const selectedCategory = useAppSelector((state) => state.projectDisplay.categoryList);
  const keyword = useAppSelector((state) => state.projectDisplay.searchText);
  const filteredProjectData = projectData.filter((project) => {
    const keywordCondition =
      project.name.includes(keyword) ||
      project.genre.find((item) => item === keyword) ||
      project.category.find((item) => item.toLowerCase() === keyword);
    let isInCategory = !(selectedCategory.length > 0);
    project.category.forEach((category) => {
      if (selectedCategory.find((item) => item === category)) {
        isInCategory = true;
      }
    });
    return keywordCondition && isInCategory;
  });
  return (
    <div className={style.root}>
      {filteredProjectData.map((project) => {
        return (
          <ProjectBlock
            key={project.id}
            id={project.id}
            imgSrc={project.squareProfilePic}
            isFeatured={!!project.category.find((item) => item === 'featureProjects')}
          />
        );
      })}
    </div>
  );
};

export default ProjectTemplate;
