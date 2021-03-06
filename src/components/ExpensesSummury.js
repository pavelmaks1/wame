import React from 'react';
import { getExpensesTotal } from '../selectors/expenses-total';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummury = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount === 1 ? 'Expense' : 'Expenses';
  const formattedExpenseTotal = numeral(expenseTotal / 100).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpenseTotal}</span> </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create"> Add expense </Link>
        </div>
      </div>
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