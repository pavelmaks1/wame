import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values',() => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual(({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }))
});

test('should set sortBy amount', () => {
  const state= filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = {
    type: 'SORT_BY_DATE'
  };
  const state = filtersReducer(currentState,action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const state = filtersReducer(undefined, { 
    type: 'SET_TEXT_FILTER',
    text: 'Something'
  });
  expect(state.text).toBe('Something');
})

test('should set startDate filter' ,() => {
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    startDate: moment(0).add(4, 'days')
  });
  expect(state.startDate).toEqual(moment(0).add(4,'days'));
});

test('shoulds set endDate filter', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    endDate: moment(0).add(1,'minute')
  });
  expect(state.endDate).toEqual(moment(0).add(1, 'minute'));
});