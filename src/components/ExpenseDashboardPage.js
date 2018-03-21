import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummury from './ExpensesSummury';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
    <ExpensesSummury />
  </div>
);

export default ExpenseDashboardPage;
