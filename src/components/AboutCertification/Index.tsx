import React from 'react';
import CertificationCard from './CertificationCard';
import certifications from './certifications';
import style from './AboutCertification.module.scss';

const AboutCertification: React.FC = () => {
  return (
    <div className={style.root}>
      <h2 className="h2 font-bold text-amber-900 dark:text-amber-700">Certification</h2>
      <div className="my-4 flex flex-col gap-y-3 md:my-6 xl:my-8">
        {certifications.map((certifications) => {
          return <CertificationCard key={certifications.name} {...certifications} />;
        })}
      </div>
    </div>
  );
};

export default AboutCertification;
