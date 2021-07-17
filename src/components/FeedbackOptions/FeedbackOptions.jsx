import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {Object.keys(options).map(option => (
      <button
        className={style.button}
        key={option}
        type="button"
        name={option}
        onClick={()=>onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
