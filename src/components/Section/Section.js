import css from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <div className={css.sectionContainer}>
    <h2>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
