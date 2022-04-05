import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRockets } from '../redux/rockets/rockets';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(fetchAllRockets());
  }, []);

  return (
    <div>
      {rockets.map((rocket) => (
        <p key={rocket.id}>
          {rocket.name}
        </p>
      ))}
    </div>
  );
}

export default Rockets;
