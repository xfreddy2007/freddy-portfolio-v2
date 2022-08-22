import React from 'react';
import classNames from 'classnames';
import { ReactComponent as GithubIcon } from '@/src/assets/footerIcon/icon-github.svg';
import style from './ProjectTooltipTemplate.module.scss';

type ProjectTooltipTemplateProps = {
  id: string;
  name: string;
  profilePic: string;
  genre: string[];
  description: string;
  link?: string;
  github: string;
};

const ProjectTooltipTemplate: React.FC<ProjectTooltipTemplateProps> = ({
  id,
  name,
  profilePic,
  genre,
  description,
  link,
  github,
}) => {
  return (
    <div className={style.root}>
      <h4 className={style.title}>{name}</h4>
      <img src={profilePic} alt={id} loading="lazy" className={style.image} />
      <p className={style.description}>{description}</p>
      <div className={style.genreContainer}>
        {genre.map((item) => (
          <span key={item} className="p-1 text-sm font-bold text-amber-900 dark:text-amber-700">{`#${item}`}</span>
        ))}
      </div>
      <div className={style.linkContainer}>
        {link && (
          <a href={link} target="_blank" rel="noreferrer">
            <div className="rounded border-[1px] border-solid border-amber-900 p-1 text-sm text-amber-900 dark:border-amber-700 dark:text-amber-700">
              Visit Site
            </div>
          </a>
        )}
        <a href={github} target="_blank" rel="noreferrer">
          <div className={classNames('dark:border-amber-700', style.githubLink)}>
            <GithubIcon />
          </div>
        </a>
      </div>
    </div>
  );
};

export default React.memo(ProjectTooltipTemplate);
