import React from 'react';
import expenses from './expenses';

export const getExpensesTotal = (expenses = []) => {
  
  if ( expenses.length === 0 ) {
    return 0;
  } else {
    return expenses
      .map( expense => expense.amount)
      .reduce( (prev,curr) => prev + curr, 0 );
  
  }

};