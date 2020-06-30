import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import categories from '../fixtures/categories';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    categories,
  }));
  const { getByText } = render((
    <App />
  ));

  expect(getByText(/한식/)).not.toBeNull();
});
