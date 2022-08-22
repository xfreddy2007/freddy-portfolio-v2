import React from 'react';

type ProjectBlockProps = {
  id: string;
  imgSrc: string;
  isFeatured: boolean;
};

const ProjectBlock: React.FC<ProjectBlockProps> = ({ id, imgSrc, isFeatured }) => {
  return (
    <div className="aspect-1" data-occupation={isFeatured ? '2' : '1'}>
      <img src={imgSrc} loading="lazy" alt={id} className="h-full" />
    </div>
  );
};

export default React.memo(ProjectBlock);
