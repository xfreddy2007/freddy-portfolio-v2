import React from 'react';
import classNames from 'classnames';
import style from './SkillCard.module.scss';

type SkillScore = {
  name: string;
  score: number;
};

export type SkillCardProps = {
  field: string;
  skills: SkillScore[];
};

const SkillCard: React.FC<SkillCardProps> = ({ field, skills }) => {
  return (
    <div className={style.root}>
      <h4 className="h5 font-bold">{field}</h4>
      <div className="my-1 h-1 w-1/2 bg-amber-900 dark:bg-amber-700" />
      <div>
        {skills.map((skill: SkillScore) => {
          return (
            <div key={skill.name} className="flex w-full justify-between">
              <p className="p my-1 font-bold">{skill.name}</p>
              <div className="my-auto h-3 w-[40%] bg-stone-300 md:h-4 xl:h-5">
                <div
                  className={classNames(style.blood, 'h-full bg-amber-900 dark:bg-amber-700')}
                  data-score={skill.score}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(SkillCard);
