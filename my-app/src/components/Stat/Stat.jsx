import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stat.module.css';

const Stat = ({ label, value, isPositive }) => {
  const statCustomStyles = {
    color: isPositive ? '#388E3C' : '#D32F2F',
  };

  return (
    <div className={styles.stat} style={statCustomStyles}>
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}&nbsp;&#x24;</p>
    </div>
  );
};

Stat.defaultProps = {
  isPositive: false,
};

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  isPositive: PropTypes.bool,
};

export default Stat;
