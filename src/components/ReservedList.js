import React from 'react';
import PropTypes from 'prop-types';

const ReservedList = ({ title, list }) => (
  <div>
    <h2>{title}</h2>
    <hr />
    {list.map((item) => (
      <p key={item.id ?? item.dragonId}>{item.name ?? item.dragonName}</p>
    ))}
    <hr />
  </div>
);

ReservedList.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(Object).isRequired,
};

export default ReservedList;
