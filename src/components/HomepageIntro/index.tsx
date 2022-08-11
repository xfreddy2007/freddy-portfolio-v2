import React from 'react';
import { ReactComponent as Avatar } from '../../assets/avatar-cute-freddy.svg';
import style from './HomepageIntro.module.scss';

const HomepageIntro: React.FC = () => {
  return (
    <div className="flex w-full justify-center pt-20">
      <div className={style.avatar}>
        <Avatar />
      </div>
    </div>
  );
};

export default HomepageIntro;
