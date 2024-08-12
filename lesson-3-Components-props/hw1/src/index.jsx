import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';
import './index.scss';

const rootElement = document.querySelector('#root');



const element = (
  <Greeting
    firstName='John'
    lastName='Doe'
    birthDate={new Date(2007, 7, 11)}
  />
)


ReactDOM.render(element, rootElement);