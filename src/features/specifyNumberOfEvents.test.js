import React from 'react';
import { mount } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  test('The App should display 32 events by default.', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given('the user has not specified number of events', () => {
      AppWrapper = mount(<App />);
    });

    when('the user is on the main page of the App', () => {
      AppWrapper.update();
    });

    then('32 events will be displayed', () => {
      expect(AppWrapper.state('numberOfEvents')).toBe(32);
    });
  });

  test('User can change the number of events they want to see.', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given('user is on the main page of the App', () => {
      AppWrapper = mount(<App />);
    });

    when('when user sets number of events in the events textbox', () => {
      AppWrapper.update();
      expect(AppWrapper.state('numberOfEvents')).toBe(32);
      AppWrapper.find('.numberOfEvents__input').simulate('change', {
        target: { value: 1 },
      });
    });

    then(
      'the number of events matching the users selected number will be displayed',
      () => {
        AppWrapper.update();
        expect(AppWrapper.state('numberOfEvents')).toBe(1);
      }
    );
  });
});
