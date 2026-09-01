import { FC } from 'react';
import { ImageComponent } from './ImageComponent.tsx';

interface PopUpComponentProps {
  item: string;
  characterObj: {
    [key: string]: Array<{
      description: string;
      imagePath: string;
      aliases: string[];
    }>;
  };
  showPopup: (item: string) => void;
  addToSavedItems: (item: string) => void;
}

export const PopUpComponent: FC<PopUpComponentProps> = (props) => {
  console.log("===",props)
  return (
    <div className='popup'>
      <button className='save' onClick={() => {props.addToSavedItems(props.item)}}>Save Character</button>
      <button className='close' onClick={()=>props.showPopup('')}>X</button>
      <ImageComponent path={props.characterObj[props.item][0].imagePath} item={props.item}/>
      <div className='content'>{props.characterObj[props.item][0].description}</div>
      <div>Aliases:</div>
      <ul className='url'>{props.characterObj[props.item][0].aliases.map((name, index) => {
        return <li key={index}>{name}</li>
      })}
      </ul>
    </div>
  );
};
