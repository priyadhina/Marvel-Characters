import React, { useState, useEffect, useRef, FC } from 'react';
import { Link } from 'react-router-dom';
import CharacterTile from './CharacterTile.tsx';
import { PopUpComponent } from './PopUpComponent.tsx';
import '../style.css';

interface Character {
  description: string;
  imagePath: string;
  aliases: string[];
}

interface CharacterObj {
  [key: string]: Character[];
}

const App: FC = () => {
  const [nameList, setNameList] = useState<string[]>([]);
  const [characterObj, setCharacterObj] = useState<CharacterObj>({});
  const [currentItem, setCurrentItem] = useState<string>('');
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [result, setResult] = useState<string[]>([]);
  const [savedCharacters, setSavedCharacters] = useState<string[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchResults();
  }, []);

  /* fetch the data from api */
  const fetchResults = (): void => {
    fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        return response.json();
      })
      .then(res => {
        const characters = res.filter((c: any) => c.biography.publisher === 'Marvel Comics');
        const newNameList: string[] = [];
        const newCharacterObj: CharacterObj = {};
        
        characters.forEach((item: any) => {
          newNameList.push(item.name);
          const group: Character[] = [];
          group.push({
            description: item.biography.firstAppearance,
            imagePath: `${item.images.lg}`,
            aliases: item.biography.aliases
          });
          newCharacterObj[item.name] = group;
        });
        
        setCharacterObj(newCharacterObj);
        setNameList(newNameList);
        setResult(newNameList);
      });
  };

  /* get user input and compare with characters list */
  const searchByName = (input: string, array: string[]): void => {
    if (input) {
      const searchResult = array.reduce((result, current) => {
        if (current.toLowerCase().indexOf(input.toLowerCase()) > -1) {
          result.push(current);
        }
        return result;
      }, [] as string[]);
      setResult(searchResult);
    } else {
      setResult(array);
    }
  };

  /* toggle popup state to hide and show */
  const handleShowPopup = (item: string): void => {
    setShowPopup(!showPopup);
    setCurrentItem(item);
  };

  /* show alert message when a character is saved */
  const addToSavedItems = (item: string): void => {
    if (savedCharacters.indexOf(item) === -1) {
      setSavedCharacters([...savedCharacters, item]);
      alert("Character added to saved characters list.");
    } else {
      alert("Character already saved.");
    }
    setShowPopup(!showPopup);
  };

  return (
    <React.Fragment>
      <div className='bg'></div>
      <div className='container'>
        <div className={`${showPopup ? 'overlay' : 'mainContent'}`}>
          <label className='header'>MARVEL CHARACTERS</label>
          <div className='viewSaved'>
            <Link to={{pathname:"/viewSaved"}} state={{list: savedCharacters}}>View Saved</Link>
          </div>
          <input 
            type="text" 
            className='search' 
            ref={searchInputRef}
            placeholder="Type character name" 
            onKeyUp={() => searchByName(searchInputRef.current?.value || '', nameList)}
          ></input>
          <CharacterTile result={result} characterObj={characterObj} showPopup={handleShowPopup} isPopupOpen={showPopup} />
        </div>
        {showPopup ? <PopUpComponent item={currentItem} showPopup={handleShowPopup} addToSavedItems={addToSavedItems} characterObj={characterObj} /> : null}
      </div>
    </React.Fragment>
  );
};

export default App;
