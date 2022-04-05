import './Rocket.scss';
import PropTypes from 'prop-types';

const Rocket = ({
  name,
  description,
  image,
}) => (
  <li>
    <img src={image} alt="" />
    <div className="rocket-description">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  </li>
);

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Rocket;
