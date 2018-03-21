import { getExpensesTotal } from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should get 0 if there are no expenses in func', () => {
  const total = getExpensesTotal();
  expect(total).toBe(0);
});

test('should correctly add up a single expense', () => {
  const total = getExpensesTotal([expenses[0]]);
  expect(total).toBe(expenses[0].amount);
});

test('should correctly add up multiple expenses', () => {
  const total = getExpensesTotal(expenses);
  expect(total).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});