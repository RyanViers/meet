import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;

  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  test('render event', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('render summary', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });

  test('render description', () => {
    expect(EventWrapper.find('.description')).toHaveLength(1);
  });

  test('render location', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });

  test('render start date', () => {
    expect(EventWrapper.find('.dateTime')).toHaveLength(1);
  });

  test('render time zone', () => {
    expect(EventWrapper.find('.timeZone')).toHaveLength(1);
  });

  /*Button Tests*/

  test('render show details button', () => {
    expect(EventWrapper.find('.show-details')).toHaveLength(1);
  });

  test('details are collapsed by default', () => {
    expect(EventWrapper.state('collapsed')).toBe(true);
  });

  test('show details when button is clicked', () => {
    EventWrapper.find('.show-details').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(false);
  });

  test('hide details when button is clicked', () => {
    EventWrapper.find('.hide-details').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(true);
  });
});
