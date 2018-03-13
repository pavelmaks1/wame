import { createStore, combineReducers } from 'redux';

const add = ({a,b}) => {
  return a + b;
};

const incrementCount = ({ incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy: decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count: count
});

const reset = () => ({
  type: 'ZERO'
});


const countReducer = (state = { count: 0}, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
        return {
          count: state.count - action.decrementBy
        };
    case 'ZERO':
      return {
        count: 0
      }
    case 'SET':
      return {
        count: action.count
      }  
    default:
        return state;
  }
};

const store = createStore(
  combineReducers({
    count: countReducer
}));

console.log(store.getState());


// works every time 'store' changes
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch({
  type: 'ZERO'
});

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: 20}));

unsubscribe();
