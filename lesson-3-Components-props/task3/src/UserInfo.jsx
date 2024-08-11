import React from "react";
import Avatar from "./Avatar";
import './userinfo.scss';


const UserInfo = (props) => {
  return (
    <div className="user-info">
      <Avatar
        avatarUrl={props.author.avatarUrl}
        name={props.author.name}
      />
      <div className="user-info__name">
        {props.user.name}
      </div>
    </div>
  )
};
export default UserInfo;