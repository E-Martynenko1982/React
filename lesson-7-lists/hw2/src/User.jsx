import React from 'react';

const User = ({ name, age }) => {
  return (
    <div>

      <span className="user__name">{name}</span>
      <span className="user__age">{age}</span>

    </div>
  );
}

export default User;
