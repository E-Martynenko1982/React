import React from "react";
import moment from 'moment';
import './profile.scss';

const formattedDate = date => moment(date).format('DD MMM YY');

const Profile = (props) => {
  return (
    <>
      <ul className="profile">
        <li className="profile__name">{`${props.name} ${props.lastName}`}</li>
        <li className="profile__birth">{formattedDate(props.birthDate)} in {props.birthPlace}</li>
      </ul>
    </>
  )
};
export default Profile

