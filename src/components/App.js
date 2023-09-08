import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistic from './Statistics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    return Math.round((good / countTotalFeedback()) * 100);
  }

  const onLeaveFeedback = event => () => {
    switch (event) {
      case 'good': {
        setGood(good + 1);
        break;
      }
      case 'neutral': {
        setNeutral(neutral + 1);
        break;
      }
      case 'bad': {
        setBad(bad + 1);
        break;
      }
      default:
        break;
    }
  };

  return (
    <div className="feedbackBorder">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good: good, neutral: neutral, bad: bad })}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positive={countPositiveFeedbackPercentage()}
          />
        ) : (
          <div>
            <h3>There is no feedback</h3>
          </div>
        )}
      </Section>
    </div>
  );
}

export default App;
