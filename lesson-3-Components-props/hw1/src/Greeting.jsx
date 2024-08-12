import React from "react";

const Greeting = ({ userData }) => {


  return (
    <div className="greeting">
      {`My name is ${userData.firstName} ${userData.lastName}. I am ${userData.birthDate} years old`}
    </div>
  )

};
export default Greeting;