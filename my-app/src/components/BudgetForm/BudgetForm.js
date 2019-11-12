import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './BudgetForm.module.css';
import { saveBudget } from '../../redux/actions';

class BudgetForm extends Component {
  constructor(props) {
    super(props);
    this.state = { budget: 0 };
  }

  handleChange = e => {
    this.setState({
      budget: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSave(Number(this.state.budget));

    this.setState({ budget: 0 });
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
