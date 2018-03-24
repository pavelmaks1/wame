import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { Provider } from 'react-redux';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';
// import './playground/promises';

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 4500}));
store.dispatch(addExpense({description: 'Gas bill', createdAt: '1000'}));
store.dispatch(addExpense({description: 'Rent', amount: '10950'}));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>,document.getElementById('root'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx,document.getElementById('root'));
});