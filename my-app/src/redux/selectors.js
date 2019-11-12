export const getAllExpenses = state => state.expenses;

export const getBudget = state => state.budget;

export const calculateTotalExpenses = state => {
  const expenses = getAllExpenses(state);

  return expenses.reduce((total, expense) => total + expense.amount, 0);
};

export const calculateBalance = state => {
  const expenses = calculateTotalExpenses(state);
  const budget = getBudget(state);

  return budget - expenses;
};
