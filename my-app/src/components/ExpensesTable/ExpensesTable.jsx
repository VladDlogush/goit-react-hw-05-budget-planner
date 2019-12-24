import React from 'react';
import PropTypes from 'prop-types';
import Notyf from 'notyf-js';
import 'notyf-js/dist/notyf.min.css';
import styles from './ExpensesTable.module.css';

const notyf = new Notyf();

const ExpensesTable = ({ items, onRemove }) => (
  <table className={styles.table}>
    <thead>
      <tr className={styles.tr}>
        <th className={styles.th}>Expense name</th>
        <th className={styles.th}>Expense amount</th>
        <th className={styles.th} />
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, name, amount }) => (
        <tr key={id} className={styles.tr}>
          <td className={styles.td}>{name}</td>
          <td className={styles.td}>{amount}</td>
          <td className={styles.td}>
            <button
              className={styles.button}
              onClick={() => {
                notyf.confirm('Your expense have been successfully deleted!');
                onRemove(id);
              }}
              type="button"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

ExpensesTable.defaultProps = {
  items: [],
};

ExpensesTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }).isRequired,
  ),
  onRemove: PropTypes.func.isRequired,
};

export default ExpensesTable;
