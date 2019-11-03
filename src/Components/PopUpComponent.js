import React from 'react';
import PropTypes from 'prop-types';
import { ImageComponent } from './ImageComponent';

export default class PopUpComponent extends React.Component {
  render () {
    return (<div className='popup'>
      <button className='save' onClick={() => {this.props.addToSavedItems(this.props.item)}}>Save Character</button>
      <button className='close' onClick={()=>this.props.showPopup('')}>X</button>
      <ImageComponent path={this.props.characterObj[this.props.item][0].imagePath} item={this.props.item}/>
      <div className='content'>{this.props.characterObj[this.props.item][0].description}</div>
      <div>URLs:</div>
      <ul className='url'>{this.props.characterObj[this.props.item][0].urls.map(url => {
        return <li><a href={url} target="_blank">{url}</a></li>
      })}
      </ul>
    </div>);
  }
}

PopUpComponent.propTypes = {
  characterObj: PropTypes.object,
  addToSavedItems: PropTypes.func,
  item: PropTypes.string,
  showPopup: PropTypes.func
};