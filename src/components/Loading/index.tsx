import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Lottie from 'lottie-react';
import heartBeatLoader from '../../assets/LottieAnimation/heartbeat-ecg-loader.json';
import heartBeatLoaderDark from '../../assets/LottieAnimation/heartbeat-ecg-loader-dark.json';
import useDarkMode from '@/src/utils/hooks/useDarkMode';
import style from './Loading.module.scss';

const Loading: React.FC = () => {
  // Loading text change animation
  const [loadingTextState, setLoadingTextState] = useState(1);
  useEffect(() => {
    const textChange = setInterval(() => {
      setLoadingTextState((prev) => prev + 1);
    }, 300);
    return () => clearInterval(textChange);
  }, []);

  // get dark mode
  const { isDarkMode } = useDarkMode();

  return (
    <div className={classNames('loading__z-index bg-white dark:bg-black', style.root)}>
      <div className={style.block} />
      <div className={style.block} />
      <div className={style.block}>
        <Lottie animationData={isDarkMode ? heartBeatLoaderDark : heartBeatLoader} loop className={style.animation} />
        <div className="font-raleway w-[100px] tracking-[0.04em] dark:text-white">{`Loading ${[
          ...Array((loadingTextState % 4) + 1),
        ]
          .map(() => '. ')
          .join('')}`}</div>
      </div>
      <div className={style.block} />
      <div className={style.block} />
    </div>
  );
};

export default Loading;
