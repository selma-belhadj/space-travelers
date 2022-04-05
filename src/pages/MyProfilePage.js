import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfilePage.scss';

function MyProfilePage() {
  const rockets = useSelector((state) => state.rockets);

  return (
    <div id="profile-page" className="spacing">
      <div id="missions-list">
        <h2>My Missions</h2>
      </div>
      <div id="rockets-list">
        <h2>My Rockets</h2>
        <hr />
        {rockets.map((rocket) => {
          const {
            id, name, reserved,
          } = rocket;
          return (
            reserved ? <p key={id}>{name}</p> : ''
          );
        })}
        <hr />
      </div>
    </div>
  );
}

export default MyProfilePage;