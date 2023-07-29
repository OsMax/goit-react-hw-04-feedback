import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className={css.buttonContainer}>
    <button
      className={css.button}
      onClick={onLeaveFeedback('good')}
      type="button"
    >
      Good
    </button>
    <button
      className={css.button}
      onClick={onLeaveFeedback('neutral')}
      type="button"
    >
      Neutral
    </button>
    <button
      className={css.button}
      onClick={onLeaveFeedback('bad')}
      type="button"
    >
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
