import ExpenseListItem from "../../components/ExpenseListItem";
import React from 'react';
import toJSON from 'enzyme-to-json';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem correctly', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});