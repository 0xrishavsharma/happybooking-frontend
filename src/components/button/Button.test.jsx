import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  test('renders the button text', () => {
    render(<Button />);
    const buttonText = screen.getByText('Button');
    expect(buttonText).toBeInTheDocument();
  });
});
