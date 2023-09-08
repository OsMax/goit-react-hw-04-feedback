import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistic.module.css';

const Statistic = props => {
  return (
    <div>
      <ul className={css.statisticContainer}>
        {Object.entries(props).map(prop => (
          <li key={prop[0]} className={css.statisticItem}>
            <span>{prop[0].charAt(0).toUpperCase() + prop[0].slice(1)}</span>
            <span>{prop[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
export default Statistic;
