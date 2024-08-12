import React from "react";
import moment from 'moment';
import './profile.scss';

const formattedDate = date => moment(date).format('DD MMM YY');

const Profile = ({ userData }) => {


  return (
    <>
      <ul className="profile">
        <li className="profile__name">{`${userData.firstName} ${userData.lastName}`}</li>
        <li className="profile__birth">
          Was born {formattedDate(userData.birthDate)} in {userData.birthPlace}
        </li>
      </ul>
    </>
  )
};
export default Profile

