import React from "react";
import UserForm from "./UserForm";

const App = () => {
  const createUser = (dataUser) => {
    console.log(dataUser);
  };



  return (
    <UserForm onSubmit={createUser} />
  );
};
export default App;