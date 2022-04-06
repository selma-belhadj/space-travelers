import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { setDragonReservation } from '../redux/dragons/dragons';

const Dragon = (props) => {
  const {
    dragonId,
    dragonName,
    dragonType,
    dragonDescription,
    dragonImageLink,
    dragonReserved,
  } = props;

  const dispatch = useDispatch();

  const handleReservation = () => {
    dispatch(setDragonReservation({ id: dragonId }));
  };

  return (
    <li key={dragonId} className="item">
      <div>
        <img src={dragonImageLink} alt={dragonName} />
      </div>
      <div className="info">
        <h3>{dragonName}</h3>
        <div className="dragon-desc-wrapper">
          <p>
            {dragonReserved ? (
              <span className="badge">Reserved</span>
            ) : null}
            Type:&nbsp;
            {dragonType}
          </p>
          <p>{dragonDescription}</p>
        </div>
        <div>
          {
            dragonReserved ? (
              <Button onClick={handleReservation} variant="outline-secondary">Cancel Reservation</Button>
            ) : (
              <Button onClick={handleReservation} variant="primary">Reserve Dragon</Button>
            )
          }
        </div>
      </div>
    </li>
  );
};

Dragon.propTypes = {
  dragonId: PropTypes.string.isRequired,
  dragonName: PropTypes.string.isRequired,
  dragonType: PropTypes.string.isRequired,
  dragonDescription: PropTypes.string.isRequired,
  dragonReserved: PropTypes.bool.isRequired,
  dragonImageLink: PropTypes.string.isRequired,
};

export default Dragon;
