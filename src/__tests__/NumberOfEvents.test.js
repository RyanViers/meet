import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;

  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('number of events is 32 by default', () => {
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(32);
  });

  test('number check is empty by default', () => {
    expect(NumberOfEventsWrapper.state('numberCheck')).toBe('');
  });

  test('render number of events', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });

  test('render user input text box', () => {
    expect(NumberOfEventsWrapper.find('.inputNumberOfEvents')).toHaveLength(1);
  });

  test('render submit input button', () => {
    expect(NumberOfEventsWrapper.find('.submit')).toHaveLength(1);
  });

  test('change state with submit button when input is validated', () => {
    const eventObject = { target: { value: 15 } };
    NumberOfEventsWrapper.find('.submit').simulate('click', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(15);
  });

  test('test for invalid input', () => {
    const eventObject = { target: { value: 45 } };
    NumberOfEventsWrapper.find('.submit').simulate('click', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe('');
  });
});
