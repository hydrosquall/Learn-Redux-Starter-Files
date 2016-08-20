// handle upates to posts
// A reducer takes in 2 things:
// 1. An action (info about what happened)
// 2. copy of current state
// -> should return next state!
// Given action, store... return an updated store!

// it's functional programming... that means you never mutate external state

// test with this:
// $r.store.dispatch({type: 'INCREMENT_LIKES', index: 0});
function posts(state = [], action) {

  // console.log("The post will change");

  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log("Incrementing Likes");
      const i = action.index;
      return  [              // es6 syntax for duplicating/slicing object
        ...state.slice(0,i), // before the one we update
        {...state[i], likes: state[i].likes + 1 },
        ...state.slice(i+1) // after the one we are updating
      ];
    // return the updated state
    default: 
      return state;

  }
  // console.log(state,action);
  return state;
}

export default posts;