import React from 'react';
import { getExpensesTotal } from '../selectors/expenses-total';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummury = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount === 1 ? 'Expense' : 'Expenses';
  const formattedExpenseTotal = numeral(expenseTotal / 100).format('$0,0.00');

  return (
    <div>
      <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal} </h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: getExpensesTotal(visibleExpenses)
  }

};

export default connect(mapStateToProps)(ExpensesSummury);