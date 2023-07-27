import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = operation => (
  <div className={css.buttonContainer}>
    <button
      className={css.button}
      onClick={operation.onLeaveFeedback(operation.options[0])}
      type="button"
    >
      Good
    </button>
    <button
      className={css.button}
      onClick={operation.onLeaveFeedback(operation.options[1])}
      type="button"
    >
      Neutral
    </button>
    <button
      className={css.button}
      onClick={operation.onLeaveFeedback(operation.options[2])}
      type="button"
    >
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
