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

import Raven from 'raven-js';
import { sentry_url, logException } from './data/config';

Raven.config(sentry_url,{
  tags: {
    git_commit: 'asdfa', //(dynamically set this)
    userLevel: 'editor'
  }
}).install(); // just 3 lines to make error catcher!

// put inside a try-catch.
logException(new Error('download failed'), {
  email: 'wesbos' // set this dynamically!
}); // use custom catcher

// sample bad code
console.log(window.doesNotExist.nope);

// Alternately set some custom notices.
Raven.captureMessage('Something bad happened!');
Raven.showReportDialog(); // triggers a thing that lets someone send crash report right away!

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