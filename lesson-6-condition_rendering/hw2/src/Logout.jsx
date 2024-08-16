import React from "react";

const Logout = ({ onLogout }) => {
  return (
    <button class="logout btn" onClick={onLogout}>Logout</button>
  )
};
export default Logout;