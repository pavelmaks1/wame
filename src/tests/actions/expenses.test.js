import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import uuid from 'uuid';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc' 
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('abc123', { note: 'something'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    updates: { note: 'something' }
  });
});

test('should setup add expense action object with provided vals', () => {
  const expenseData = {
    description: 'Rent',
    amount: 1085,
    createdAt: 1000,
    note: 'this was last months'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup add expense action obj with default values ', () => {

  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '', 
      amount: 0, 
      createdAt: 0
    }
  });
});