import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';

import SavedCharacters from './Components/SavedCharacters';

import { Route, BrowserRouter as Router } from 'react-router-dom';

const Root = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/viewSaved" component={SavedCharacters} />
    </div>
  </Router>
);

render(Root, document.getElementById('root'));
