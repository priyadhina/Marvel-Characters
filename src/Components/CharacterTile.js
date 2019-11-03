import React from 'react';
import PropTypes from 'prop-types';
import { ImageComponent } from './ImageComponent';

/* this component displays each character with 3 characters per page */
export default class CharacterTile extends React.Component {
  constructor () {
    super();
    this.state = {
      currentPage: 1
    };
  }

  handleClick (value) {
    if(value === 'prev')
      this.setState({currentPage: this.state.currentPage-1});
    else if(value === 'next'){
      this.setState({currentPage: this.state.currentPage+1});
    }
  }
  
  render() {
    const itemsPerPage = 3;
    const lastItemIndex = this.state.currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const currentList = this.props.result && this.props.result.slice(firstItemIndex, lastItemIndex);
    const renderItems = currentList && currentList.map((item, index) => {
      return <li key={index} onClick={() => this.props.showPopup(item)}>
      <ImageComponent path={this.props.characterObj[item][0].imagePath} item={item} />
      </li>;
    });
    const prevStatus = firstItemIndex <= 0 ? true : false;
    const nextStatus = lastItemIndex >= (this.props.result && this.props.result.length) ? true : (this.props.result ? false : true);
    return (
      <React.Fragment>
        <ul className="renderItem">
          {renderItems}
        </ul>
        <div style={{position: `${this.props.isPopupOpen ? 'relative' : '' }`}} className="buttonContainer" >
        <button className="previous" disabled={prevStatus} onClick={()=>this.handleClick('prev')}>Prev</button>
        <button className="next" disabled={nextStatus} onClick={()=>this.handleClick('next')}>Next</button>
        </div>
      </React.Fragment>
    );
  }
} 

CharacterTile.propTypes= {
  result: PropTypes.array,
  characterObj: PropTypes.object,
  showPopup: PropTypes.func
};