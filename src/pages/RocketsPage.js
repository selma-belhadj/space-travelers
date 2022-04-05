import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRockets } from '../redux/rockets/rockets';
import Rocket from '../components/Rocket';

function RocketsPage() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    if (!rockets.length) dispatch(fetchAllRockets());
  }, []);

  return (
    <div id="rockets-page">
      <ul id="rockets-list">
        <Rocket />
      </ul>
    </div>
  );
}

export default RocketsPage;
