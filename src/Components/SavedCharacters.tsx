import React, { useState, useEffect, FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LocationState {
  list?: string[];
}

const SAVED_CHARACTERS_KEY = 'savedCharacters';

const SavedCharacters: FC = () => {
  const [activeList, setActiveList] = useState<string[]>(() => {
    const saved = localStorage.getItem(SAVED_CHARACTERS_KEY);
    if (saved) {
      return JSON.parse(saved);
    }

    const state = (window.history.state?.usr as LocationState | undefined) ?? undefined;
    return state?.list ?? [];
  });
  const location = useLocation();

  useEffect(() => {
    const state = location.state as LocationState;
    if (state && state.list) {
      setActiveList(state.list);
      localStorage.setItem(SAVED_CHARACTERS_KEY, JSON.stringify(state.list));
      return;
    }

    const saved = localStorage.getItem(SAVED_CHARACTERS_KEY);
    if (saved) {
      setActiveList(JSON.parse(saved));
    }
  }, [location.state]);

  useEffect(() => {
    localStorage.setItem(SAVED_CHARACTERS_KEY, JSON.stringify(activeList));
  }, [activeList]);

  const removeItem = (item: string): void => {
    const index = activeList.indexOf(item);
    if (index !== -1) {
      const updatedList = activeList.filter((_, i) => i !== index);
      setActiveList(updatedList);
    }
  };

  const renderList = activeList && activeList.map(item => {
    return (
      <li key={item.toString()}>
        {item}
        <button className='remove' onClick={() => removeItem(item)}>Remove</button>
      </li>
    );
  });

  return (
    <React.Fragment>
      <div className='bg'></div>
      <div className='container'>
        <div className='back'>
          <Link to={{pathname:"/"}}>{String.fromCharCode(0x3C)} Home</Link>
        </div>
        <div className="savedItems">
          {activeList && activeList.length > 0 ? (
            <ul>{renderList}</ul>
          ) : (
            <div className='disclaimer'>
              There are no saved characters. Go {<Link to={{pathname:"/"}}>Back</Link>} to save your favourite character.
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SavedCharacters;
