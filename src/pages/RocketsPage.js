import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRockets, toggleReservedStatus } from '../redux/rockets/rockets';
import Rocket from '../components/Rocket';
import './RocketsPage.scss';

function RocketsPage() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    if (!rockets.length) dispatch(fetchAllRockets());
  }, []);

  return (
    <div id="rockets-page" className="spacing">
      <ul id="rockets-list">
        {rockets.map((rocket) => {
          const {
            id, name, description, images, reserved, type,
          } = rocket;
          return (
            <Rocket
              key={id}
              name={name}
              description={description}
              image={images[0]}
              type={type}
              isReserved={reserved}
              onReserveButtonClick={() => dispatch(toggleReservedStatus({ id }))}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default RocketsPage;
