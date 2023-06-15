import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Navbar from './Navbar';
import Home from '../../pages/home/Home';

describe('Navbar component', () => {
  it('renders the navbar text', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    
    // Check if the navbar items are rendered
    const navbarListItems = screen.getByTestId('logo');
    expect(navbarListItems).toBeInTheDocument();

    // Check if the register button is rendered
    const registerButton = screen.getByRole('register');
    expect(registerButton).toBeInTheDocument();

    // Check if the login button is rendered
    const loginButton = screen.getByRole('login');
    expect(loginButton).toBeInTheDocument();
  });

  it('navigates to the correct routes', () => {
    render(
      <MemoryRouter>
        <Navbar />
        <Home />
      </MemoryRouter>
    );
  
    const logoLinks = screen.queryAllByTestId('logo');
    fireEvent.click(logoLinks[0]);
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});