import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe('Header component', () => {
  let navigateMock;

  beforeEach(() => {
    navigateMock = jest.fn();
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(navigateMock);
  });

  it('renders the header text', () => {
    render(
      <MemoryRouter>
        <Header type="hotels" />
      </MemoryRouter>
    );
    
    // Check if the header items are rendered
    const headerListItems = screen.getAllByRole('heading', { hidden: true });
    expect(headerListItems).toHaveLength(5);
  });
  
  it('type is not hotels', () => {
    // Check if the search input fields are rendered
    render(
      <MemoryRouter>
        <Header type="hostels" />
      </MemoryRouter>
    );

    const locationInput = screen.getByPlaceholderText('Where are you going?');
    expect(locationInput).toBeInTheDocument();
  });

  it('triggers the search function when search button is clicked', () => {
    render(
      <MemoryRouter>
        <Header type="hostels" />
      </MemoryRouter>
    );
    
    // Mock user input
    const locationInput = screen.getByPlaceholderText('Where are you going?');
    fireEvent.change(locationInput, { target: { value: 'Shimla' } });

    const searchButton = screen.getByRole('button', { name: 'Search' });
    fireEvent.click(searchButton);

    // Check if the search function is called with the correct parameters
    expect(navigateMock).toHaveBeenCalledWith('/hotels', {
      state: {
        destination: 'Shimla',
        date: expect.any(Array),
        options: expect.any(Object),
      },
    });
  });
});
