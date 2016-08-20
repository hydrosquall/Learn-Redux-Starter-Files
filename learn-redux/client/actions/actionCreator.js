// could be split into separate files for bigger application

// increment 
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
export function addComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i, //index
    postId
  }
}

