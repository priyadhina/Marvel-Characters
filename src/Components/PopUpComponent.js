import React from 'react';
import PropTypes from 'prop-types';
import { ImageComponent } from './ImageComponent';

export const PopUpComponent = (props) => {
  return (<div className='popup'>
      <button className='save' onClick={() => {props.addToSavedItems(props.item)}}>Save Character</button>
      <button className='close' onClick={()=>props.showPopup('')}>X</button>
      <ImageComponent path={props.characterObj[props.item][0].imagePath} item={props.item}/>
      <div className='content'>{props.characterObj[props.item][0].description}</div>
      <div>URLs:</div>
      <ul className='url'>{props.characterObj[props.item][0].urls.map(url => {
        return <li><a href={url} rel="noopener noreferrer" target="_blank">{url}</a></li>
      })}
      </ul>
    </div>);
  };

PopUpComponent.propTypes = {
  characterObj: PropTypes.object,
  addToSavedItems: PropTypes.func,
  item: PropTypes.string,
  showPopup: PropTypes.func
};