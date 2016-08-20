// The main application wrapper
import React from 'react';
import { Link } from 'react-router';
 
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    // Need index of the post
    // get the actual post
    
    
    const { postId } = this.props.params;

    // // this method of getting i doesn't look performant, use a filter instead
    const i = this.props.posts.findIndex((post) => post.code === postId  );
    const post = this.props.posts[i];

    const postComments = this.props.comments[postId] || []; // handle cases w/ no comments

    console.log(post);

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props}/>
      </div>
      )
  }
});

export default Single;
