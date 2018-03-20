import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { DateRangePicker } from 'react-dates';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altfilters } from '../fixtures/filters';
let setTextFilter, sortByDate , sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
     />
  )
});

test('should render expense list filters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render expense list with ald data correctly', () => {
  wrapper.setProps({
    filters: altfilters
  });
  expect(wrapper).toMatchSnapshot();
});

//should handle text change
test('should handle text change', () => {
  const text = 'Text here';
  wrapper.find('input[type="text"]').simulate('change', {
    target: {
      value: text
    }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith('Text here');
});

// should sort by date / amount
test('should sort by date', () => {
  wrapper.setProps({
    filters: altfilters
  });

  wrapper.find('select').simulate('change', {
    target: {
      value: 'date'
    }
  });
  expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
  wrapper.setProps({
    filters: filters
  });

  wrapper.find('select').simulate('change', {
    target: {
      value: 'amount'
    }
  });
  expect(sortByAmount).toHaveBeenCalled();
});

// should handle date changes 
test('should handle date changes', () => {
  const startDate = moment(0).add(1,'days');
  const endDate = moment(0).add(2,'days');
  const picker = wrapper.children().get(2);
  picker.props.onDatesChange({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

// should handle date focus changes

test('should handle date focus changes', () => {
  const picker = wrapper.children().get(2);
  const calendarFocused = 'endDate';
  picker.props.onFocusChange(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
}) ;