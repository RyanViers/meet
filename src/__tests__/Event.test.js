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

  test('render location', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });

  test('render start date', () => {
    expect(EventWrapper.find('.start-date')).toHaveLength(1);
  });

  test('renders text correctly', () => {
    expect(EventWrapper.find('.summary').text('.summary')).toBe(
      'Learn JavaScript'
    );
  });

  /*test('render description element', () => {
    EventWrapper.setState({ collapsed: false });
    expect(EventWrapper.find('.show-description')).toHaveLength(1);
  });

  test('hide description element', () => {
    EventWrapper.setState({ collapsed: true });
    expect(EventWrapper.find('.hide-description')).toHaveLength(1);
  });*/

  test('render description', () => {
    EventWrapper.setState({ collapsed: false });
    expect(EventWrapper.find('.description')).toHaveLength(1);
  });

  /*Button Tests*/

  test('render show details button', () => {
    expect(EventWrapper.find('.details-button')).toHaveLength(1);
  });

  test('details are collapsed by default', () => {
    EventWrapper.setState({ collapsed: true });
    expect(EventWrapper.state('collapsed')).toBe(true);
  });

  test('show details when button is clicked', () => {
    EventWrapper.setState({ collapse: true });
    EventWrapper.find('.show-details').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(false);
  });

  test('hide details when button is clicked', () => {
    EventWrapper.setState({ collapsed: false });
    EventWrapper.find('.hide-details').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(true);
  });
});
