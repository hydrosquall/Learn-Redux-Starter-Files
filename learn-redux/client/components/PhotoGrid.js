// The main application wrapper
import React from 'react';
// import { Link } from 'react-router';
import Photo from './Photo';

// ... is ES6 spread... gives ALL the properties out. One could be more careful and selective about this actually.
// Pass key and i since key is not usable in app (react consumes it)
const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map( (post,i) => <Photo {... this.props} key={i} i={i} post={post} />)}
      </div>
      )
  }
});

export default PhotoGrid;
