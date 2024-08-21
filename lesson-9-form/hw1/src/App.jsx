import React from "react";
import UsersList from "./UsersList";

const users = [
  { id: 1, name: 'Tad', age: 18 },
  { id: 2, name: 'Anna', age: 45 },
  { id: 3, name: 'Goro', age: 148 },
];

const App = () => {
  return (
    <UsersList users={users} />
  );
};

export default App;
