import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h1>Expense list</h1>
    {console.log(props)}
    {props.expenses.map( (expense,index) =>
      <ExpenseListItem 
        {...expense} 
        key={expense.id}
        indexId={index}
      />
    )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

console.log(mapStateToProps);

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;