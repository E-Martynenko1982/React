import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import './index.scss';

const rootElement = document.querySelector('#root');
const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars1.githubusercontent.com'
}
const element = (
  <Comment
    user={userInfo}
    text="Good job!"
    date={new Date(0, 1, 1,)}
  />
)


ReactDOM.render(element, rootElement);