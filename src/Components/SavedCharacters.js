import React from 'react';
import { Link } from 'react-router-dom';

export default class SavedCharacters extends React.Component {
  constructor () {
    super();
    this.state = {
      activeList: []
    }
  }
  componentDidMount() {
    this.setState({activeList: this.props.location.list});
  }
  removeItem (item) {
     var index = this.state.activeList.indexOf(item);
     if (index !== -1) this.state.activeList.splice(index, 1);
     this.setState({activeList: this.state.activeList})
  }
  render () {
    const renderList = this.state.activeList && this.state.activeList.map(item => {
        return <li key={item.toString()}>
        {item}
        <button className='remove' onClick={() => {this.removeItem(item)}}>Remove</button>
        </li>
      });
    return (
      <React.Fragment>
      <div className='bg'></div>
      <div className='container'>
      <div className='back'><Link to={{pathname:"/"}}>{String.fromCharCode(0x3C)} Home</Link></div>
      <div className="savedItems">
    {this.state.activeList && this.state.activeList.length > 0 ? <ul>{renderList}</ul> : <div className='disclaimer'>There are no saved characters. Go {<Link to={{pathname:"/"}}>Back</Link>} to save your favourite character.</div> }
      </div>
      </div>
      </React.Fragment>
    )
  }
}