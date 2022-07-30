import React from 'react';
import classNames from 'classnames';
import style from './Loading.module.scss';

const Loading: React.FC = () => {
  return (
    <div className={classNames('font-bold', style.root)}>
      <div>Loading</div>
    </div>
  );
};

export default Loading;
