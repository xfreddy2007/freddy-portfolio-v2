import React, { SyntheticEvent } from 'react';
import ProjectTooltipTemplate from '../ProjectTooltipTemplate';
import ReactDOMServer from 'react-dom/server';
import diaMatch from '@/src/utils/hooks/useMediaMatch';
import { useAppDispatch } from '@/src/store/hooks';
import { onClickSelectProject } from '@/src/feature/projectDisplay';
import style from './ProjectBlock.module.scss';

type ProjectBlockProps = {
  id: string;
  imgSrc: string;
  isFeatured: boolean;
  name: string;
  profilePic: string;
  genre: string[];
  description: string;
  link?: string;
  github: string;
};

const ProjectBlock: React.FC<ProjectBlockProps> = ({
  id,
  imgSrc,
  isFeatured,
  name,
  profilePic,
  genre,
  description,
  link,
  github,
}) => {
  // redux tookit: onClick select project id
  const dispatch = useAppDispatch();
  // desktop media
  const isDesktop = useMediaMatch('(min-width: 1024px)');
  const tooltip = (
    <ProjectTooltipTemplate
      id={id}
      name={name}
      profilePic={profilePic}
      genre={genre}
      description={description}
      link={link}
      github={github}
    />
  );
  return (
    <div
      className={style.root}
      onClick={!isDesktop ? () => dispatch(onClickSelectProject(id)) : undefined}
      data-occupation={isFeatured ? '2' : '1'}
      data-tip={isDesktop ? ReactDOMServer.renderToString(<div>{tooltip}</div>) : undefined}
    >
      <img src={imgSrc} loading="lazy" alt={id} className={style.image} />
      <div className={style.coverModal}>{name}</div>
    </div>
  );
};

export default React.memo(ProjectBlock);
