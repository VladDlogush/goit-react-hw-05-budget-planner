import Type from './constatnts';

export const saveBudget = value => ({
  type: Type.SAVE_BUDGET,
  payload: value,
});

export const addExpense = expense => ({
  type: Type.ADD_EXPENSE,
  payload: expense,
});

export const deleteExpense = id => ({
  type: Type.DELETE_EXPENSE,
  payload: id,
});
