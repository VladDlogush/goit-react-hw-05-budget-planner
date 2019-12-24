import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notyf from 'notyf-js';
import 'notyf-js/dist/notyf.min.css';
import { connect } from 'react-redux';
import styles from './BudgetForm.module.css';
import { saveBudget } from '../../redux/actions';

const notyf = new Notyf();

class BudgetForm extends Component {
  constructor(props) {
    super(props);
    this.state = { budget: '' };
  }

  handleChange = e => {
    this.setState({
      budget: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (Number(this.state.budget) >= 0) {
      this.props.onSave(Number(this.state.budget));
      notyf.confirm('Your changes have been successfully saved!');
    } else {
      notyf.alert('Enter the correct amount');
    }

    this.setState({ budget: '' });
  };

  render() {
    const { budget } = this.state;
    return (
      <div>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label
            htmlFor="budgetInput"
            className={styles.label}
            style={{ marginBottom: '16px' }}
          >
            Enter your total budget
            <input
              id="budgetInput"
              type="number"
              className={styles.input}
              value={budget}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className={styles.button}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

BudgetForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSave: value => dispatch(saveBudget(value)),
});

export default connect(
  null,
  mapDispatchToProps,
)(BudgetForm);
