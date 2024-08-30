import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const User = () => {


  const { USER_ID } = useParams();
  const [userData, setUserData] = useState(null);


  useEffect(() => {
    fetch(`https://api.github.com/users/${USER_ID}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error();
      })
      .then(userData => {
        setUserData(userData);
      })
  }, [USER_ID])

  if (!userData) {
    return null;
  }

  const { avatar_url, name, location } = userData;

  return (


    <div className="user">
      <img
        alt="User Avatar"
        src={avatar_url}
        className="user__avatar"
      />
      <div className="user__info">

        <span className="user__name">{name}</span>

        <span className="user__location">{location}</span>
      </div>
    </div>

  )

}

export default User;



