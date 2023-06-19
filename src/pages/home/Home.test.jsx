import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Home component', () => {
  it('renders the component', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const homeElement = screen.getByTestId('home');
    expect(homeElement).toBeInTheDocument();
  });

  it('displays the welcome message', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const welcomeMessage = screen.getByText('HappyBooking');
    expect(welcomeMessage).toBeInTheDocument();
  });
});
