import React from 'react';
import classNames from 'classnames';
import { useAppSelector } from '@/src/store/hooks';
import style from './CertificationCard.module.scss';

export type CertificationCardProps = {
  name: string;
  issueDate: string;
  issueInstitute: string;
  id?: string;
  link?: string;
};

const CertificationCard: React.FC<CertificationCardProps> = ({ name, issueDate, issueInstitute, id, link }) => {
  // redux tookit: dark mode
  const mode = useAppSelector((state) => state.switchThemeMode.mode);
  const isDarkMode = mode === 'dark';
  return link ? (
    <a href={link} target="_blank" rel="noreferrer">
      <div className={classNames(style.root, 'border-amber-900 dark:border-amber-700')} data-dark-mode={isDarkMode}>
        <h4 className="h5 font-bold">{name}</h4>
        <p className="p">{issueInstitute}</p>
        <p className="p">{issueDate}</p>
        {id && <p className="p">{`Certificate ID: ${id}`}</p>}
      </div>
    </a>
  ) : (
    <div className={classNames(style.root, 'border-amber-900 dark:border-amber-700')} data-dark-mode={isDarkMode}>
      <h4 className="h5 font-bold">{name}</h4>
      <p className="p">{issueInstitute}</p>
      <p className="p">{issueDate}</p>
      {id && <p className="p">{`Certificate ID: ${id}`}</p>}
    </div>
  );
};

export default React.memo(CertificationCard);
