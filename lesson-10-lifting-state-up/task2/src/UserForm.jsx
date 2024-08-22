import React from "react";
import './UserForm.scss';
const UserForm = ({ userData, handleChange }) => {

  return (
    <div className="column">

      <form className="user-form">
        <input
          type="text"
          name="firstName"
          className="user-form__input"
          value={userData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          className="user-form__input"
          value={userData.lastName}
          onChange={handleChange}
        />
      </form>
    </div>
  )


};
export default UserForm;