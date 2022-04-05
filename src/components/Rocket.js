import PropTypes from 'prop-types';
import './Rocket.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Rocket = ({
  name,
  description,
  image,
  isReserved,
  onReserveButtonClick,
}) => (
  <li className="rocket">
    <div className="rocket-image-container">
      <img src={image} alt="Rocket" />
    </div>
    <div className="rocket-description">
      <h2>{name}</h2>
      <p>
        <span className={isReserved ? 'reserved-badge' : 'not-reserved'}>Reserved</span>
        {description}
      </p>
      <Button
        variant={isReserved ? 'light' : 'primary'}
        onClick={onReserveButtonClick}
      >
        {isReserved ? 'Cancel Reservation' : 'Reserve Rocket'}
      </Button>
    </div>
  </li>
);

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isReserved: PropTypes.bool,
  onReserveButtonClick: PropTypes.func.isRequired,
};

Rocket.defaultProps = {
  isReserved: false,
};

export default Rocket;
