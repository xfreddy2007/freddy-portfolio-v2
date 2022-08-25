import React from 'react';
import { ReactComponent as MailIcon } from '@/src/assets/footerIcon/icon-mail.svg';
import { ReactComponent as FacebookIcon } from '@/src/assets/footerIcon/icon-facebook.svg';
import { ReactComponent as InstagramIcon } from '@/src/assets/footerIcon/icon-instagram.svg';
import { ReactComponent as LinkedInIcon } from '@/src/assets/footerIcon/icon-linkedin.svg';
import { ReactComponent as MediumIcon } from '@/src/assets/footerIcon/icon-medium.svg';
import { ReactComponent as GithubIcon } from '@/src/assets/footerIcon/icon-github.svg';
import { useAppSelector } from '@/src/store/hooks';
import style from './ContactContent.module.scss';

const ContactContent: React.FC = () => {
  // redux tookit: dark mode
  const mode = useAppSelector((state) => state.switchThemeMode.mode);
  const isDarkMode = mode === 'dark';

  return (
    <div className="font-raleway h-full w-full px-4 md:px-12 xl:px-20">
      <h1 className="h2 mt-32 font-black md:mt-48">If you are interested, you can contact me through these:</h1>
      <div className="mt-6 flex flex-col gap-6 md:mt-12 md:gap-10">
        <div className={style.contact} data-dark-mode={isDarkMode}>
          <MailIcon />
          <a href="mailto:xfreddy2007@gmail.com" target="_blank" rel="noreferrer">
            <span className="p underline md:h5">: xfreddy2007@gmail.com</span>
          </a>
        </div>
        <div className={style.contact} data-dark-mode={isDarkMode}>
          <FacebookIcon />
          <a href="https://www.facebook.com/xfreddy2007" target="_blank" rel="noreferrer">
            <span className="p underline md:h5">: https://www.facebook.com/xfreddy2007</span>
          </a>
        </div>
        <div className={style.contact} data-dark-mode={isDarkMode}>
          <InstagramIcon />
          <a href="https://www.instagram.com/xfreddy2007/" target="_blank" rel="noreferrer">
            <span className="p underline md:h5">: https://www.instagram.com/xfreddy2007/</span>
          </a>
        </div>
        <div className={style.contact} data-dark-mode={isDarkMode}>
          <LinkedInIcon />
          <a href="https://www.linkedin.com/in/freddy-liu-515525156/" target="_blank" rel="noreferrer">
            <span className="p underline md:h5">: https://www.linkedin.com/in/freddy-liu-515525156/</span>
          </a>
        </div>
        <div className={style.contact} data-dark-mode={isDarkMode}>
          <GithubIcon />
          <a href="https://github.com/xfreddy2007" target="_blank" rel="noreferrer">
            <span className="p underline md:h5">: https://github.com/xfreddy2007</span>
          </a>
        </div>
        <div className={style.contact} data-dark-mode={isDarkMode}>
          <MediumIcon />
          <a href="https://medium.com/@xfreddy2007" target="_blank" rel="noreferrer">
            <span className="p underline md:h5">: https://medium.com/@xfreddy2007</span>
          </a>
        </div>
      </div>
      <h2 className="h3 mt-16 pb-32 text-center font-bold md:mt-24">Look forward to hear your voice!</h2>
    </div>
  );
};

export default ContactContent;
