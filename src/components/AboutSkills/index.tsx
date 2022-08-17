import React from 'react';
import SkillCard from './SkillCard';
import skillStack from './skillStack';
import style from './AboutSkills.module.scss';

const AboutSkills: React.FC = () => {
  return (
    <div className={style.root}>
      <h2 className="h2 font-bold text-amber-900 dark:text-amber-700">Skill Stacks</h2>
      <div className="flex flex-col gap-y-3 md:flex-row md:flex-wrap">
        <SkillCard field={skillStack.frontend.field} skills={skillStack.frontend.skills} />
        <SkillCard field={skillStack.backend.field} skills={skillStack.backend.skills} />
        <SkillCard field={skillStack.database.field} skills={skillStack.database.skills} />
        <SkillCard field={skillStack.devops.field} skills={skillStack.devops.skills} />
        <SkillCard field={skillStack.cicd.field} skills={skillStack.cicd.skills} />
        <SkillCard field={skillStack.ecommerce.field} skills={skillStack.ecommerce.skills} />
        <SkillCard field={skillStack.others.field} skills={skillStack.others.skills} />
      </div>
    </div>
  );
};

export default AboutSkills;
