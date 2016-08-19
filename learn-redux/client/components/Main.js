// The main application wrapper
import React from 'react';
import { Link } from 'react-router';
 

 // ReactClonelement passes elements from parent down to the child.
const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Fluxstagram </Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
      )
  }
});

export default Main;
