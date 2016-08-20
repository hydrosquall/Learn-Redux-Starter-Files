import React from 'react';

const Comments = React.createClass({
  renderComment(comment, i) { // instead of making a new component, do a jsx render function.
    console.log(comment);
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;
          </button>
        </p>
      </div>
    )
  },
  // handler for adding comments
  handleSubmit(e) {
    e.preventDefault(); // prevent page from refreshing... or return false overall.
    console.log("Submitting the form");
    // use ref tags to get data out the form!
    // console.log(this.refs);
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    // console.log(postId, author, comment);
    this.props.addComment(postId, author, comment); // use reducer to update state
    this.refs.commentForm.reset(); // clear the form with standard JS

  },
  render() {
    return (
        <div className="comments">
          {this.props.postComments.map(this.renderComment)}
          <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
              <input type="text" ref="author" placeholder="author"/>
              <input type="text" ref="comment" placeholder="comment"/>
              <input type="submit" hidden/>
          </form>
        </div>
      )
  }
});

export default Comments;
