import React from 'react';
import { Link } from 'react-router-dom';
import CharacterTile from './CharacterTile';
import PopUpComponent from './PopUpComponent';
import '../style.css';
import { transformUrls } from '../Utilities/utils';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nameList: [],
      characterObj: {},
      currentItem: '',
      showPopup: false,
      viewSaved :false
    }
    this.savedCharacters = [];
  }

  componentDidMount () {
    this.fetchResults();
  }
  /* fetch the data from api */
  fetchResults () {
    fetch('https://gateway.marvel.com/v1/public/characters?ts=1565922410&apikey=6a038473ffd6407750a2ea27115f7e7c&hash=1492df65a88ef98a1a279719fe509f72')
    .then(response => response.json())
    .then(res => {
      const characters = res.data.results.slice(0,18);
      const nameList = [], characterObj={};
      // eslint-disable-next-line
      characters.map((item,index) => {
        nameList.push(item.name);
        const group = [];
        group.push({
          description: item.description,
          imagePath: `${item.thumbnail.path + '.' + item.thumbnail.extension}`,
          urls: transformUrls(item.urls)
        });
        characterObj[item.name] = group;
      });
      this.setState({characterObj});
      this.setState({nameList});
    });
  }
  /* get user input and compare with characters list */
  searchByName (input,array) {
    let result = [];
    if(input) {
      for (var i = 0; i<array.length; i++) { 
          if(((array[i].toLowerCase()).indexOf(input.toLowerCase()))>-1) 
          { 
            result.push(array[i]);
          } 
      }
    }
    this.setState({result});
  }
  /* toggle popup state to hide and show */
  showPopup (item) {
    this.setState({showPopup: !this.state.showPopup, currentItem: item});
  }
  /*show alert message when a character is saved */
  addToSavedItems (item) {
    this.savedCharacters.push(item);
    alert("Item added to saved characters list");
    this.setState({showPopup: !this.state.showPopup});
  }

  render() {
    return (
      <React.Fragment>
        <div className='bg'></div>
        <div className='container'>
          <div className={`${this.state.showPopup ? 'overlay' : 'mainContent'}`}>
            <label className='header'>MARVEL CHARACTERS</label>
            <div className='viewSaved'><Link to={{pathname:"/viewSaved", list: this.savedCharacters}}>View Saved </Link></div>
            <input type="text" className='search' ref="input" placeholder="Type character name" onKeyUp={() => this.searchByName(this.refs.input.value,this.state.nameList)} ></input>
            <CharacterTile result={this.state.result} characterObj={this.state.characterObj} showPopup={this.showPopup.bind(this)} isPopupOpen={this.state.showPopup} />
          </div>
          { this.state.showPopup ? <PopUpComponent item={this.state.currentItem} showPopup={this.showPopup.bind(this)} addToSavedItems={this.addToSavedItems.bind(this)} characterObj={this.state.characterObj} /> : null}
        </div>
      </React.Fragment>
    );
  }
}
