import React from "react";

const Greeting = (props) => {
  return (
    <div className="greeting">
      {`My name is ${props.userData.firstName} ${props.userData.lastName}. I am ${props.userData.birthDate} years old`}
    </div>
  )

};
export default Greeting;