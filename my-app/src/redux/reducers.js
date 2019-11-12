import { combineReducers } from 'redux';
import Type from './constatnts';

export function expensesReducer(state = [], action) {
  switch (action.type) {
    case Type.ADD_EXPENSE:
      return [...state, action.payload];

    case Type.DELETE_EXPENSE:
      return state.filter(el => el.id !== action.payload);

    default:
      return state;
  }
}

export function budgetReducer(state = 0, action) {
  switch (action.type) {
    case Type.SAVE_BUDGET:
      return action.payload;

    default:
      return state;
  }
}

export default combineReducers({
  budget: budgetReducer,
  expenses: expensesReducer,
});
