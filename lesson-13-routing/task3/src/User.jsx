import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function fetchUserData() {
      setLoading(true);

      fetch(`https://api.github.com/users/${userId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setUserData(data);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
          setUserData(null); // В случае ошибки
        })
        .finally(() => {
          setLoading(false);
        });
    }

    fetchUserData();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>Error loading user data</div>;
  }
  const { avatar_url, name, location } = userData

  return (

    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
}

export default User;
