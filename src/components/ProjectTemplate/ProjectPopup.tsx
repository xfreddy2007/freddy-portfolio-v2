import React from 'react';
import ProjectTooltipTemplate from '../ProjectTooltipTemplate';
import { ReactComponent as CloseIcon } from '@/src/assets/icon-close.svg';
import { useAppSelector, useAppDispatch } from '@/src/store/hooks';
import { onClickSelectProject } from '@/src/feature/projectDisplay';
import style from './ProjectPopup.module.scss';

type ProjectPopupProps = {
  id?: string;
  name?: string;
  profilePic?: string;
  genre?: string[];
  description?: string;
  link?: string;
  github?: string;
};

const ProjectPopup: React.FC<ProjectPopupProps> = ({
  id = '',
  name = '',
  profilePic = '',
  genre = [],
  description = '',
  link = '',
  github = '',
}) => {
  // redux tookit: onClick select project id
  const selectedId = useAppSelector((state) => state.projectDisplay.selectedProjectId);
  const dispatch = useAppDispatch();
  const isShow = !!selectedId;
  return (
    <div className={style.root} data-show={isShow}>
      <button className={style.closeBtn} onClick={() => dispatch(onClickSelectProject(''))}>
        <CloseIcon />
      </button>
      <ProjectTooltipTemplate
        id={id}
        name={name}
        profilePic={profilePic}
        genre={genre}
        description={description}
        link={link}
        github={github}
      />
    </div>
  );
};

export default React.memo(ProjectPopup);
