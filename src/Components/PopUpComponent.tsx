import { FC } from 'react';
import { ImageComponent } from './ImageComponent.tsx';

interface PopUpComponentProps {
  item: string;
  characterObj: {
    [key: string]: Array<{
      firstAppearance: string;
      imagePath: string;
      aliases: string[];
    }>;
  };
  showPopup: (item: string) => void;
  addToSavedItems: (item: string) => void;
}

export const PopUpComponent: FC<PopUpComponentProps> = (props) => {
  return (
    <div className='popup'>
      <div className='popupHeader'>
        <button className='save' onClick={() => {props.addToSavedItems(props.item)}}>Save Character</button>
        <button className='close' onClick={()=>props.showPopup('')}>X</button>
      </div>

      <div className='popupBody'>
        <ImageComponent path={props.characterObj[props.item][0].imagePath} item={props.item}/>

        <div className='popupDetails'>
          <div className='popupSection'>
            <div className='popupLabel'>First Appearance:</div>
            <div className='content'>{props.characterObj[props.item][0].firstAppearance}</div>
          </div>

          <div className='popupSection'>
            <div className='popupLabel'>Aliases:</div>
            <ul className='url'>
              {props.characterObj[props.item][0].aliases.map((name, index) => {
                return <li key={index}>{name}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
