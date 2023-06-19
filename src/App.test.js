import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

it('renders welcome message', () => {
  render(<App />);
  const elements = screen.getAllByText('HappyBooking');
  expect(elements[0]).toBeInTheDocument();
});
