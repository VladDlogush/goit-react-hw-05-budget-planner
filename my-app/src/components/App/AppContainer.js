import { connect } from 'react-redux';
import { getAllExpenses } from '../../redux/selectors';
import App from './App';

const mapStateToProps = state => ({
  expenses: getAllExpenses(state),
});

export default connect(
  mapStateToProps,
  null,
)(App);
