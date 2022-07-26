import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import Lottie from 'lottie-react';
import { useAppSelector } from '@/src/store/hooks';
import welcome from '../../assets/LottieAnimation/welcome.json';
import welcomeDark from '../../assets/LottieAnimation/welcome-dark.json';

const Welcome: React.FC = () => {
  // redux tookit: dark mode
  const mode = useAppSelector((state) => state.switchThemeMode.mode);
  const isDarkMode = mode === 'dark';

  const welcomeRef = useRef(null);
  const [isWelcomed, setIsWelcomed] = useState(false);
  useEffect(() => {
    const startAnimation = setTimeout(() => {
      //@ts-ignore
      welcomeRef.current?.play();
    }, 2000);
    const welcome = setTimeout(() => setIsWelcomed(true), 5250);
    return () => {
      clearTimeout(startAnimation);
      clearTimeout(welcome);
    };
  }, []);
  return (
    <div
      className={classNames(
        'loading__z-index items-centerbg-white flex h-screen w-screen justify-center transition-opacity duration-[750ms] dark:bg-black',
        isWelcomed && 'opacity-0',
      )}
    >
      <Lottie
        lottieRef={welcomeRef}
        animationData={isDarkMode ? welcome : welcomeDark}
        onDOMLoaded={() => {
          //@ts-ignore
          welcomeRef.current?.pause();
        }}
        loop
        className="w-[27vw] max-w-[500px]"
      />
    </div>
  );
};

export default Welcome;
