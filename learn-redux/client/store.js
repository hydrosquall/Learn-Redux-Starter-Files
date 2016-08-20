import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// IMport the root reducer
import rootReducer from './reducers/index';

// IMport data, this could also be an API call for live app.
import comments from './data/comments';
import posts from './data/posts';


// Create an object for the default data
const defaultState = {
  posts,
  comments // key equivalent to 'comments': comments, es6 syntax sugar
};

// for devTools
const enhancers = compose( // ternary to decide whether to execute or clone
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

// Make the store and history available to other things.
const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

// tricks to hot-reload reducers, wouldn't work by default.
if (module.hot) {
  module.hot.accept('./reducers', ()=> {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer); // force new reducer in!
  });
}

export default store;