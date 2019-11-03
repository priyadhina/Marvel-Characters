import React from 'react';

export const ImageComponent = ({item, path}) => {
  return (
    <React.Fragment>
      <div className='image'><img width="100%" height="100%" alt="coming soon" src={path} /></div>
      <div className="title">{item}</div>
    </React.Fragment>);
};