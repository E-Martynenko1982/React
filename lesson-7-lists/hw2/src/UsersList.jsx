import React from "react";
import User from './User';
const UsersList = ({ users }) => {
  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <User name={user.name} age={user.age} />
          </li>
        ))}
      </ul>

    </div>
  );
}

export default UsersList;
