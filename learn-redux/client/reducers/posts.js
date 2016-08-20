// handle upates to posts
// A reducer takes in 2 things:
// 1. An action (info about what happened)
// 2. copy of current state
// -> should return next state!
// Given action, store... return an updated store!

// test with this:
// $r.store.dispatch({type: 'INCREMENT_LIKES', index: 0});
function posts(state = [], action) {
  console.log("The post will change");
  console.log(state,action);
  return state;
}

export default posts;