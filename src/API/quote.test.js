import React from 'react';
import { render, screen } from '@testing-library/react';
import Quote from './quote';

test('renders quote and author', async () => {
  render(<Quote />);

  // Wait for the API call to complete
  await screen.findByText(/loading/i, {}, { timeout: 3000 });

  const quoteElement = screen.queryByTestId('quote');
  const authorElement = screen.queryByTestId('author');
  console.log(quoteElement,authorElement);

  expect(quoteElement).toBeTruthy();
  expect(authorElement).toBeTruthy();
});
