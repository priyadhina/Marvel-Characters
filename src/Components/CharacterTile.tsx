import React, { useState, FC } from 'react';
import { ImageComponent } from './ImageComponent.tsx';

interface CharacterTileProps {
  result?: string[];
  characterObj: {
    [key: string]: Array<{
      description: string;
      imagePath: string;
      urls: string[];
    }>;
  };
  showPopup: (item: string) => void;
  isPopupOpen: boolean;
}

/* displays each character with 3 characters per page */
const CharacterTile: FC<CharacterTileProps> = (props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
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
  const nextStatus = props.result ? lastItemIndex >= props.result.length : true;
  
  return (
    <React.Fragment>
      <ul className="renderItem">
        {renderItems}
      </ul>
      <div style={{position: props.isPopupOpen ? 'relative' : 'static'}} className="buttonContainer" >
        <button className="previous" disabled={prevStatus} onClick={()=> setCurrentPage(currentPage-1)}>Prev</button>
        <button className="next" disabled={nextStatus} onClick={()=>setCurrentPage(currentPage+1)}>Next</button>
      </div>
    </React.Fragment>
  );
}; 

export default CharacterTile;
