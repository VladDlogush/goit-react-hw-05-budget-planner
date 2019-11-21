import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notyf from 'notyf-js';
import 'notyf-js/dist/notyf.min.css';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { addExpense } from '../../redux/actions';
import { getBudget } from '../../redux/selectors';
import styles from './ExpenseForm.module.css';

const notyf = new Notyf();

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      amount: '',
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
    const { budget } = this.props;

    if (!budget) {
      notyf.warn('Operation is not possible. Your balance is 0$');

      this.setState({ name: '', amount: '' });
      return;
    }

    if (name === '' || amount <= 0) {
      notyf.alert('Enter a correct number or fill in all the fields');
    } else {
      const expense = {
        id: shortid.generate(),
        name,
        amount: Number(amount),
      };
      notyf.confirm('Your changes have been successfully saved!');

      this.props.onSave(expense);
    }

    this.setState({ name: '', amount: '' });
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
  budget: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  budget: getBudget(state),
});

const mapDispatchToProps = dispatch => ({
  onSave: expense => dispatch(addExpense(expense)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpenseForm);
