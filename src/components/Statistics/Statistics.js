import React from 'react';
import css from './Statistic.module.css';

const Statistic = ({ good, neutral, bad, total, positive }) => (
  <div>
    <ul className={css.statisticContainer}>
      <li className={css.statisticItem}>
        <span>Good: </span>
        <span>{good}</span>
      </li>
      <li className={css.statisticItem}>
        <span>Neutral: </span>
        <span>{neutral}</span>
      </li>
      <li className={css.statisticItem}>
        <span>Bad:</span>
        <span>{bad}</span>
      </li>
      <li className={css.statisticItem}>
        <span>Total: </span>
        <span>{total}</span>
      </li>
      <li className={css.statisticItem}>
        <span>Positive feedback:</span>
        <span>{positive}%</span>
      </li>
    </ul>
  </div>
);
export default Statistic;
