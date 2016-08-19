import React from 'react'; // no filepath because NPM handles it

import { render } from 'react-dom'; // render functions to touch DOM/canvas

// import css
import css from './styles/style.styl';

// import components
import Main from './components/Main';

render(
    <Main/>, 
    document.getElementById('root'));