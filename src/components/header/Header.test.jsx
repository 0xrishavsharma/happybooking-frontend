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
  let alertMock;

  beforeEach(() => {
    navigateMock = jest.fn();
    alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
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

  it('renders the destination input field as empty by default', () => {
    render(
      <MemoryRouter>
        <Header type="hostels" />
      </MemoryRouter>
    );
      
    const locationInput = screen.getByPlaceholderText('Where are you going?');
    expect(locationInput.value).toBe('');
  });

  it('updates the destination input field when user types', () => {
    render(
      <MemoryRouter>
        <Header type="hostels" />
      </MemoryRouter>
    );
  
    const locationInput = screen.getByPlaceholderText('Where are you going?');
    fireEvent.change(locationInput, { target: { value: 'Shimla' } });
    expect(locationInput.value).toBe('Shimla');
  }); 
  
  it('displays an alert when search button is clicked without filling all inputs', () => {
    render(
      <MemoryRouter>
        <Header type="hostels" />
      </MemoryRouter>
    );
    
    // Mock user input
    const searchButton = screen.getByRole('button', { name: 'Search' });
    fireEvent.click(searchButton);

    // Check if the alert is displayed
    expect(alertMock).toHaveBeenCalledWith(
      "Please fill all inputs to search the hotels!"
    );
  });

  it('updates the options state correctly when handleOption is called', () => {
    render(
      <MemoryRouter>
        <Header type="hostels" />
      </MemoryRouter>
    );

    const optionsPopInput = screen.getByTestId('optionsPopInput');

    fireEvent.click(optionsPopInput); // Set openOptions to true

  
    const decreaseAdultButton = screen.getByTestId('decreaseAdultButton');
    const increaseAdultButton = screen.getByTestId('increaseAdultButton');
    const increaseChildrenButton = screen.getByTestId('increaseChildrenButton');
    const decreaseChildrenButton = screen.getByTestId('decreaseChildrenButton');
    const increaseRoomButton = screen.getByTestId('increaseRoomButton');
    const decreaseRoomButton = screen.getByTestId('decreaseRoomButton');
  
    // Check initial state
    expect(screen.getByText('1 adult · 0 children · 1 room')).toBeInTheDocument();
  
    // Increase adult count
    fireEvent.click(increaseAdultButton);
    expect(screen.getByText('2 adult · 0 children · 1 room')).toBeInTheDocument();

    // Decrease adult count
    fireEvent.click(decreaseAdultButton);
    expect(screen.getByText('1 adult · 0 children · 1 room')).toBeInTheDocument();

    // Decrease adult count should not go below 1
    fireEvent.click(decreaseAdultButton);
    expect(screen.getByText('1 adult · 0 children · 1 room')).toBeInTheDocument();
  
    // Increase children count
    fireEvent.click(increaseChildrenButton);
    expect(screen.getByText('1 adult · 1 children · 1 room')).toBeInTheDocument();

    // Decrease children count
    fireEvent.click(decreaseChildrenButton);
    expect(screen.getByText('1 adult · 0 children · 1 room')).toBeInTheDocument();

    // Increase room count
    fireEvent.click(increaseRoomButton);
    expect(screen.getByText('1 adult · 0 children · 2 room')).toBeInTheDocument();

    // Decrease room count
    fireEvent.click(decreaseRoomButton);
    expect(screen.getByText('1 adult · 0 children · 1 room')).toBeInTheDocument();
  
    // Decrease room count should not go below 1
    fireEvent.click(decreaseRoomButton);
    expect(screen.getByText('1 adult · 0 children · 1 room')).toBeInTheDocument();
  });
  
});
