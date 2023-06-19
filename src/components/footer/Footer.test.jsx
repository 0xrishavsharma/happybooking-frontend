import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  test('renders the footer content', () => {
    render(<Footer />);
    
    // Check if the place items are rendered
    const placeItems = screen.getAllByRole('listitem');
    expect(placeItems).toHaveLength(36);
    
    // Check if the copyright text is rendered
    const copyrightText = screen.getByText('Copyright © 2023 HappyBooking™');
    expect(copyrightText).toBeInTheDocument();
  });
});
