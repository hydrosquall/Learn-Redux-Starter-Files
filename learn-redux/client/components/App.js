// add data to Main.js

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreator';
import Main from './Main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch); // some magic that wraps the actions written in our actions folder
}


// Let's extend Main! Give all the state data to the main.
const App = connect(mapStateToProps, mapDispatchToProps)(Main); 

export default App;