import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllMissions, joinMissionStatus, leaveMissionStatus } from '../redux/missions/missions';
import './MissionsPage.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    if (!missions.length) dispatch(fetchAllMissions());
  }, []);
  const missionTable = missions.map((mission) => (
    <tr key={mission.id}>
      <td>{mission.name}</td>
      <td>{mission.description}</td>
      <td className="text-center">
        <span className={(!mission.reserved) ? 'status-field unavailable-status ' : 'status-field available-status'}>{(!mission.reserved) ? 'NOT A MEMBER' : 'ACTIVE MEMBER'}</span>
      </td>
      <td className="text-center"><button onClick={() => { dispatch((!mission.reserved) ? joinMissionStatus(mission.id) : leaveMissionStatus(mission.id)); }} className={(!mission.reserved) ? 'button-mission join-mission' : 'button-mission leave-mission'} type="button">{(!mission.reserved) ? 'JOIN MISSION' : 'LEAVE MISSION'}</button></td>

    </tr>
  ));
  return (
    <div id="missions-page" className="spacing">
      <table>
        <thead>
          <tr>
            <th className="mission-name">Mission</th>
            <th className="mission-description">Description</th>
            <th className="mission-status">Status</th>
            <th aria-label="mission action" className="mission-action" />
          </tr>
        </thead>
        <tbody>
          { missionTable }
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
