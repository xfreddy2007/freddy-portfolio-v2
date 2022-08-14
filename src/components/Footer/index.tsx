import React from 'react';
import classNames from 'classnames';
import { ReactComponent as FacebookIcon } from '@/src/assets/footerIcon/icon-facebook.svg';
import { ReactComponent as InstagramIcon } from '@/src/assets/footerIcon/icon-instagram.svg';
import { ReactComponent as LinkedInIcon } from '@/src/assets/footerIcon/icon-linkedin.svg';
import { ReactComponent as MediumIcon } from '@/src/assets/footerIcon/icon-medium.svg';
import { ReactComponent as GithubIcon } from '@/src/assets/footerIcon/icon-github.svg';
import style from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={classNames('bg-amber-900 dark:bg-amber-700', style.root)}>
      <div className={style.iconContainer}>
        <a href="https://www.facebook.com/xfreddy2007" target="_blank" rel="noreferrer">
          <FacebookIcon />
        </a>
        <a href="https://www.instagram.com/xfreddy2007/" target="_blank" rel="noreferrer">
          <InstagramIcon />
        </a>
        <a href="https://www.linkedin.com/in/freddy-liu-515525156/" target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/xfreddy2007" target="_blank" rel="noreferrer">
          <GithubIcon />
        </a>
        <a href="https://medium.com/@xfreddy2007" target="_blank" rel="noreferrer">
          <MediumIcon />
        </a>
      </div>
      <p className="p mt-4 flex flex-col text-center lg:mt-8">
        <span>{`© ${new Date().getFullYear()} - Developed by Freddy Liu.`}</span>
        <span>All Rights Reserved.</span>
      </p>
    </footer>
  );
};

export default Footer;
