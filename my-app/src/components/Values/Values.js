import React from 'react';
import PropTypes from 'prop-types';
import styles from './Values.module.css';
import Stat from '../Stat/Stat';

const Values = ({ expenses, budget, balance }) => (
  <section className={styles.values}>
    <Stat label="Budget" value={budget} isPositive />
    <Stat label="Expenses" value={expenses} />
    <Stat label="Balance" value={balance} isPositive={balance >= 0} />
  </section>
);

Values.propTypes = {
  budget: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
};

export default Values;
