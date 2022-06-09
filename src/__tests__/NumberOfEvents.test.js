import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;

  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
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
    expect(NumberOfEventsWrapper.find('.numberOfEvents__input')).toHaveLength(
      1
    );
  });

  test('change state when input is validated', () => {
    NumberOfEventsWrapper.find('.numberOfEvents__input').simulate('change', {
      target: { value: 15 },
    });
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(15);
  });

  test('test for invalid input', () => {
    const eventObject = { target: { value: 45 } };
    NumberOfEventsWrapper.find('.numberOfEvents__input').simulate(
      'change',
      eventObject
    );
    expect(NumberOfEventsWrapper.state('numberCheck')).toBe(
      'You must enter number between 1 and 32.'
    );
  });
});
