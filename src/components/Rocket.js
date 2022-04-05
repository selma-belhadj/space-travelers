import PropTypes from 'prop-types';
import './Rocket.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Rocket = ({
  name,
  description,
  image,
}) => (
  <li className="rocket">
    <div className="rocket-image-container">
      <img src={image} alt="" />
    </div>
    <div className="rocket-description">
      <h2>{name}</h2>
      <p>{description}</p>
      <Button variant="primary">Reserve Rocket</Button>
    </div>
  </li>
);

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Rocket;
