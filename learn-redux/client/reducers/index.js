// this combines all the other reducers

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'; // which page you're on

// Little reducers
import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({posts, comments, routerReducer });

export default rootReducer;