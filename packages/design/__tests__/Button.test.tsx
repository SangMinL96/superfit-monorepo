import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../src/components/button/Button'; // adjust the import path as necessary

test('renders the initial test state and updates it on button click', () => {
  render(<Button />);

  // Check if the initial text is rendered
  expect(screen.getByText('test')).toBeInTheDocument();

  // Click the button to update the state
  fireEvent.click(screen.getByText('Boop'));

  // Check if the text has been updated
  expect(screen.getByText('test22')).toBeInTheDocument();
});
