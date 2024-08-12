import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';
import './index.scss';

const rootElement = document.querySelector('#root');
const calculateAge = (birthDate) => {
  const today = new Date();
  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();

  let age = today.getFullYear() - birthYear;

  // Перевіряємо, якщо цьогорічний день народження вже минув чи ще ні
  const isBirthdayPassed = today.getMonth() > birthMonth || (today.getMonth() === birthMonth && today.getDate() >= birthDay);

  // Якщо день народження ще не був цього року, зменшуємо вік на 1
  if (!isBirthdayPassed) {
    age -= 1;
  }

  return age;
};
const userData = {
  firstName: 'John',
  lastName: "Doe",
  birthDate: calculateAge(new Date(2007, 7, 11))
}

const element = (
  <Greeting
    userData={userData}
  />
)


ReactDOM.render(element, rootElement);