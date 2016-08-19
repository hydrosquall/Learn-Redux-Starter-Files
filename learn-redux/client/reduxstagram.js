import React from 'react'; // no filepath because NPM handles it

import { render } from 'react-dom'; // render functions to touch DOM/canvas

// import css
import css from './styles/style.styl';

// import components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>  
    <Route path="/" component={Main}>
      <IndexRoute  component={PhotoGrid}> </IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>

);
// Use indexRoute by default... but use the other route if the url string matches.
render(
    router, 
    document.getElementById('root'));