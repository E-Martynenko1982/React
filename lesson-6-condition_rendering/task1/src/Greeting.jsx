import React from "react";
import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";

const Greeting = ({ isLoggedIn }) => {
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />

  // if (isLoggedIn) {
  //   return <UserGreeting />
  // }
  // return <GuestGreeting />

};
export default Greeting;