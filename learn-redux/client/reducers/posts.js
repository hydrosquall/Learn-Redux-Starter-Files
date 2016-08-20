// handle upates to posts
// A reducer takes in 2 things:
// 1. An action (info about what happened)
// 2. copy of current state
// -> should return next state!
// Given action, store... return an updated store!

function posts(state = [], action) {
  console.log(state,action);
  return state;
}

export default posts;