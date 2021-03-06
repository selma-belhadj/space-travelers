import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listDragons } from '../redux/dragons/dragons';
import Dragon from '../components/Dragon';
import './dragons.scss';

const Dragons = () => {
  const dispatch = useDispatch();
  const dragonsList = useSelector((state) => state.dragons);

  useEffect(() => {
    if (dragonsList.length < 1) {
      dispatch(listDragons());
    }
  });

  return (
    <div className="spacing">
      <ul className="dragons-list">
        {dragonsList.map((dragon) => (
          <Dragon
            key={dragon.dragonId}
            dragonId={dragon.dragonId}
            dragonName={dragon.dragonName}
            dragonType={dragon.dragonType}
            dragonDescription={dragon.dragonDescription}
            dragonImageLink={dragon.dragonImage}
            dragonReserved={dragon.dragonReserved}
          />
        ))}
      </ul>
    </div>
  );
};

export default Dragons;
