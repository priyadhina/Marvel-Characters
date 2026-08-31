import { FC } from 'react';
import { ImageComponent } from './ImageComponent.tsx';

interface PopUpComponentProps {
  item: string;
  characterObj: {
    [key: string]: Array<{
      description: string;
      imagePath: string;
      urls: string[];
    }>;
  };
  showPopup: (item: string) => void;
  addToSavedItems: (item: string) => void;
}

export const PopUpComponent: FC<PopUpComponentProps> = (props) => {
  return (
    <div className='popup'>
      <button className='save' onClick={() => {props.addToSavedItems(props.item)}}>Save Character</button>
      <button className='close' onClick={()=>props.showPopup('')}>X</button>
      <ImageComponent path={props.characterObj[props.item][0].imagePath} item={props.item}/>
      <div className='content'>{props.characterObj[props.item][0].description}</div>
      <div>URLs:</div>
      <ul className='url'>{props.characterObj[props.item][0].urls.map((url, index) => {
        return <li key={index}><a href={url} rel="noopener noreferrer" target="_blank">{url}</a></li>
      })}
      </ul>
    </div>
  );
};
