import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Hotels from './Hotels';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/example/path",
    state:{
      destination: "istanbul",
      date: [{
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      }],
      options: {
        adults: 1,
        children: 0,
        room: 1,
      },
    },
  })
}));

describe('Hotels', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Hotels />
      </MemoryRouter>
    );
  });

  it('should render Hotels component', () => {
    expect(screen.getByTestId('hotels')).toBeInTheDocument();
  });

  it('should render destination', () => {
    expect(screen.getByTestId('destination')).toBeInTheDocument();
  });

  it('should open and close date', () => {
    const openDate = screen.getByTestId('openDate');
    fireEvent.click(openDate);

    const date = screen.getByTestId('date');
    expect(date).toBeInTheDocument();

    fireEvent.click(openDate);
    expect(date).not.toBeInTheDocument();
  });

  it('should render options', () => {
    expect(screen.getByTestId('options')).toBeInTheDocument();
  });

  it('should render checkbox', () => {
    expect(screen.getByTestId('checkbox')).toBeInTheDocument();
  });

  it('should render search button', () => {
    expect(screen.getByTestId('searchBtn')).toBeInTheDocument();
  });

  it('should set min price', () => {
    const minPrice = screen.getByTestId('minPrice');
    fireEvent.change(minPrice, { target: { value: 100 } });
    expect(minPrice.value).toBe('100');
  });

  it('should set max price', () => {
    const maxPrice = screen.getByTestId('maxPrice');
    fireEvent.change(maxPrice, { target: { value: 100 } });
    expect(maxPrice.value).toBe('100');
  });

  it('should set adult', () => {
    const adult = screen.getByTestId('adult');
    fireEvent.change(adult, { target: { value: 2 } });
    expect(adult.value).toBe('2');
  });

  it('should set children', () => {
    const children = screen.getByTestId('children');
    fireEvent.change(children, { target: { value: 2 } });
    expect(children.value).toBe('2');
  });

  it('should set room', () => {
    const room = screen.getByTestId('room');
    fireEvent.change(room, { target: { value: 2 } });
    expect(room.value).toBe('2');
  });

  it('should set checkbox', () => {
    const checkbox = screen.getByTestId('checkbox');
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });

  it('should set destination', () => {
    const destination = screen.getByTestId('destination');
    fireEvent.change(destination, { target: { value: 'istanbul' } });
    expect(destination.value).toBe('Istanbul');
  });
});