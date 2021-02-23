import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const weekContainer = screen.getByTestId('week-container');
  expect(weekContainer).toBeInTheDocument();
});
