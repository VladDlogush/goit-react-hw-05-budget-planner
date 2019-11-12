import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { addExpense } from '../../redux/actions';
import styles from './ExpenseForm.module.css';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      amount: 0,
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, amount } = this.state;

    const expense = {
      id: shortid.generate(),
      name,
      amount: Number(amount),
    };

    this.props.onSave(expense);

    this.setState({ name: '', amount: 0 });
  };

  render() {
    const { name, amount } = this.state;
    return (
      <div>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label
            htmlFor="expenseNameInput"
            className={styles.label}
            style={{ marginBottom: '16px' }}
          >
            Enter expense name
            <input
              id="expenseAmountInput"
              type="text"
              name="name"
              className={styles.input}
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label
            htmlFor="expenseNameInput"
            className={styles.label}
            style={{ marginBottom: '16px' }}
          >
            Enter expense amount
            <input
              id="expenseAmountInput"
              type="number"
              name="amount"
              className={styles.input}
              value={amount}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className={styles.button}>
            Add
          </button>
        </form>
      </div>
    );
  }
}

ExpenseForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSave: expense => dispatch(addExpense(expense)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ExpenseForm);
