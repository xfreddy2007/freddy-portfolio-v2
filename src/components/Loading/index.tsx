import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Lottie from 'lottie-react';
import heartBeatLoader from '../../assets/LottieAnimation/heartbeat-ecg-loader.json';
import heartBeatLoaderDark from '../../assets/LottieAnimation/heartbeat-ecg-loader-dark.json';
import useDarkMode from '@/src/utils/hooks/useDarkMode';

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

  // deal fade out animation
  const [isTextOut, setIsTextOut] = useState(false);
  useEffect(() => {
    const textFade = setTimeout(() => setIsTextOut(true), 1500);
    return () => clearTimeout(textFade);
  }, []);

  return (
    <div className="loading__z-index h-screen w-screen bg-white dark:bg-black">
      <div
        className={classNames(
          'flex h-full w-full items-center justify-center transition-opacity duration-500 ease-in',
          isTextOut && 'opacity-0',
        )}
      >
        <Lottie animationData={isDarkMode ? heartBeatLoaderDark : heartBeatLoader} loop className="mr-2 w-[40px]" />
        <div className="font-raleway w-[100px] tracking-[0.04em] dark:text-white">
          {`Loading ${[...Array((loadingTextState % 4) + 1)].map(() => '. ').join('')}`}
        </div>
      </div>
    </div>
  );
};

export default Loading;
