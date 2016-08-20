import React from 'react'; // no filepath because NPM handles it

import { render } from 'react-dom'; // render functions to touch DOM/canvas

// import css
import css from './styles/style.styl';

// import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router dependencies
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store, { history } from './store';

// Select provider, then call : $r.store.getState();
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

// Use indexRoute by default... but use the other route if the url string matches.
render(
    router, 
    document.getElementById('root'));