import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { ImageComponent } from './ImageComponent';

/* displays each character with 3 characters per page */
export default function CharacterTile (props) {
  const [currentPage,setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentList = props.result && props.result.slice(firstItemIndex, lastItemIndex);
  const renderItems = currentList && currentList.map((item, index) => {
    return <li key={index} onClick={() => props.showPopup(item)}>
    <ImageComponent path={props.characterObj[item][0].imagePath} item={item} />
    </li>;
  });
  const prevStatus = firstItemIndex <= 0 ? true : false;
  const nextStatus = lastItemIndex >= (props.result && props.result.length) ? true : (props.result ? false : true);
  return (
    <React.Fragment>
      <ul className="renderItem">
        {renderItems}
      </ul>
      <div style={{position: `${props.isPopupOpen ? 'relative' : '' }`}} className="buttonContainer" >
      <button className="previous" disabled={prevStatus} onClick={()=> setCurrentPage(currentPage-1)}>Prev</button>
      <button className="next" disabled={nextStatus} onClick={()=>setCurrentPage(currentPage+1)}>Next</button>
      </div>
    </React.Fragment>
    );
  
} 

CharacterTile.propTypes= {
  result: PropTypes.array,
  characterObj: PropTypes.object,
  showPopup: PropTypes.func
};