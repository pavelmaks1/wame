import React from 'react';
import { ExpensesSummury } from '../../components/ExpensesSummury';
import { shallow } from 'enzyme';

test('should correctly render ExpensesSummury with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummury expenseCount={1} expenseTotal={15} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummury with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummury expenseCount={20} expenseTotal={200} />);
  expect(wrapper).toMatchSnapshot();
});