// handle upates to posts
// A reducer takes in 2 things:
// 1. An action (info about what happened)
// 2. copy of current state
// -> should return next state!
// Given action, store... return an updated store!

// everything needs to get mashed into the root reducer in redux
function postComments(state = [], action) {
  // console.log(state);
  switch(action.type) {
    case 'ADD_COMMENT':
      console.log("adding ", action.comment);
      return [...state, { // clone of original state, with new stuff added
          user: action.author,
          text: action.comment
        }];
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0,action.i),
        ...state.slice(action.i+1) // remove state[i]
      ];
      // could extend with modified comment
    default: 
      return state;

  }
}

function comments(state=[],action) {
  if (typeof action.postId !== 'undefined') {
    console.log("Handling a comment!");
    return {
      // take current state
      ...state,
      // overwrite 1 post with new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }

  return state;
}
export default comments;