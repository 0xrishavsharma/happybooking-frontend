import React from 'react';
import { render, screen } from '@testing-library/react';
import FeaturedProperties from './FeaturedProperties'

jest.mock('../../hooks/useFetch', () => {
  let callCount = 0;
  return {
    __esModule: true,
    default: jest.fn(() => {
      // This is used to simulate the loading state
      const loading = callCount === 0 ? true : false;
      const data = [
        { id: 1, name: 'Property 1', city: 'City 1', rating: 4.5, cheapestPrice: 100, photos: [] },
        { id: 2, name: 'Property 2', city: 'City 2', rating: 4.2, cheapestPrice: 150, photos: [] },
        { id: 3, name: 'Property 3', city: 'City 3', rating: 4.7, cheapestPrice: 120, photos: [] },
        { id: 4, name: 'Property 4', city: 'City 4', rating: 4.0, cheapestPrice: 180, photos: [] },
      ];
      callCount++;
      return {
        data,
        loading,
        error: null
      };
    })
  };
});

// Custom matcher definition
expect.extend({
  toHaveLoadingElements(received) {
    const loadingElements = received.queryAllByTestId('loading-element');
    const pass = loadingElements.length > 0;
    if (pass) {
      return {
        message: () => `Expected to not have loading elements, but found ${loadingElements.length}`,
        pass: true,
      };
    } else {
      return {
        message: () => 'Expected to have loading elements',
        pass: false,
      };
    }
  },
});

describe('Featured properties component', () => {
  it('renders loading elements when loading is true', () => {
    render(<FeaturedProperties />);
    expect(screen).toHaveLoadingElements();
  });

  it('renders property elements when loading is false', () => {
    render(<FeaturedProperties />);

    const propertyElements = screen.getAllByTestId('property-element');
    expect(propertyElements.length).toBeGreaterThan(0);
  });

  it('renders fallback UI when data is empty', () => {
    render(<FeaturedProperties />);

    jest.mock('../../hooks/useFetch', () => ({
      __esModule: true,
      default: jest.fn(() => ({
        data: [],
        loading: false,
        error: null,
      })),
    }));

    const fallbackMessage = screen.queryByTestId('no-properties-element');
    expect(fallbackMessage).toBeInTheDocument();
  });  

  it('renders fallback UI when data is empty', () => {
    render(<FeaturedProperties />);

    jest.mock('../../hooks/useFetch', () => ({
      __esModule: true,
      default: jest.fn(() => ({
        data: [],
        loading: false,
        error: null,
      })),
    }));

    const fallbackMessage = screen.queryByTestId('no-properties-element');
    expect(fallbackMessage).toBeInTheDocument();
  });  
});
