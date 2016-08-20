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

// Make the store and history available to other things.
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;