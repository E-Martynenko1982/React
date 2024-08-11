import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import Comment from './Comment';


const rootElement = document.querySelector('#root');
const element = (
  <Comment
    text="Good job!"
    date={new Date(0, 1, 1,)}
  />
)


ReactDOM.render(element, rootElement);