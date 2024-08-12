import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';
import './index.scss';

const rootElement = document.querySelector('#root');

const userData = {
  firstName: 'John',
  lastName: "Doe",
  birthDate: new Date(2007, 7, 11)
}

const element = (
  <Greeting
    firstName={userData.firstName}
    lastName={userData.lastName}
    birthDate={userData.birthDate}
  />
)


ReactDOM.render(element, rootElement);