import { connect } from 'react-redux';
import {
  calculateTotalExpenses,
  getBudget,
  calculateBalance,
} from '../../redux/selectors';
import Values from './Values';

const mapStateToProps = state => ({
  budget: getBudget(state),
  expenses: calculateTotalExpenses(state),
  balance: calculateBalance(state),
});

export default connect(
  mapStateToProps,
  null,
)(Values);
