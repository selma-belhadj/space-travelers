import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfilePage.scss';
import ReservedList from '../components/ReservedList';

function MyProfilePage() {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions);
  const dragonsList = useSelector((state) => state.dragons);
  const filteredDragons = dragonsList.filter((dragon) => dragon.dragonReserved);
  const filteredMissions = missions.filter((mission) => mission.reserved);
  const filteredRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div id="profile-page" className="spacing">
      <div id="missions-list">
        <ReservedList list={filteredMissions} title="My Missions" />
      </div>
      <div id="rockets-list">
        <ReservedList list={filteredRockets} title="My Rockets" />
      </div>
      <div id="dragons-list">
        <ReservedList list={filteredDragons} title="My Dragons" />
      </div>
    </div>
  );
}

export default MyProfilePage;
