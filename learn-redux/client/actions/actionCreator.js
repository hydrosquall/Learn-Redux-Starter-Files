// could be split into separate files for bigger application

// increment 
// use with this.props.increment.bind(null,index) so in can work 
// not just on pageload. bind to particular index :)
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index // implicitly index: index
  }
}

// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i, //index
    postId
  }
}

