import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';
import './index.scss';

const rootElement = document.querySelector('#root');
const userData = {
  firstName: 'James',
  lastName: 'Bond',
  birthDate: '1991-01-17T11:11:11.819Z',
  birthPlace: 'London',
};

const element = (
  <Profile
    name={userData.firstName}
    lastName={userData.lastName}
    birthDate={userData.birthDate}
    birthPlace={userData.birthPlace}
  />
)


ReactDOM.render(element, rootElement);