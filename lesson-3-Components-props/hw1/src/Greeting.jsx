import React from "react";

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
const Greeting = ({ firstName, lastName, birthDate }) => {
  return (
    <div className="greeting">
      {`My name is ${firstName} ${lastName}. 
      I am ${calculateAge(birthDate)} years old`}
    </div>
  )

};
export default Greeting;