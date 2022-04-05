import React from 'react';
import PropTypes from 'prop-types';

const Dragon = (props) => {
  const {
    dragonId,
    dragonName,
    dragonType,
    dragonDescription,
    dragonImageLink,
    dragonReserved,
  } = props;

  return (
    <li key={dragonId} className="item">
      <div>
        <img src={dragonImageLink} alt={dragonName} style={{ width: '100%' }} />
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
              <button type="button" className="btn btn-cancel">Cancel Reservation</button>
            ) : (
              <button type="button" className="btn btn-reserve">Reserve Dragon</button>
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
