import React, { FC } from 'react';

interface ImageComponentProps {
  item: string;
  path: string;
}

export const ImageComponent: FC<ImageComponentProps> = ({item, path}) => {
  return (
    <React.Fragment>
      <div className='image'><img width="100%" height="100%" alt={item} src={path} /></div>
      <div className="title">{item}</div>
    </React.Fragment>
  );
};
