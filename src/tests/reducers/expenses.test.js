import ExpensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = ExpensesReducer(undefined, { type: '@@INIT' });
   expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = ExpensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense by id if it is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = ExpensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add the new expense', () => {
  const expense = {
    id: '4',
    description: 'Gumming gun',
    note: '',
    amount: 210,
    createdAt: 0
  };

  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = ExpensesReducer(expenses,action);
  expect(state).toEqual([...expenses,expense]);
})

test('should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      note: 'Something',
      amount: 12200
    }
   };

  const state = ExpensesReducer(expenses, action);
  expect(state[0]).toEqual({
    id: '1',
    description: 'Gum',
    note: 'Something',
    amount: 12200,
    createdAt: 0  
  })
});

test ('should not edit expense if expense not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '10',
    updates: {
      amount: 235
    }
  };

  const state = ExpensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});