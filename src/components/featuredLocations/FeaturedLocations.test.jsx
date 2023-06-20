import React from 'react';
import { render, screen } from '@testing-library/react';
import Featured from './FeaturedLocations';

// Custom matcher to check if loading elements are present
expect.extend({
  toHaveLoadingElements(received) {
    const loadingElements = received.queryAllByTestId('loading-element');
    const pass = loadingElements.length > 0;
    if (pass) {
      return {
        message: () => `Expected not to have loading elements, but found ${loadingElements.length}`,
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

// Custom matcher to check if city elements are rendered with the correct length
expect.extend({
  toRenderCityElementsWithLength(received, expectedLength) {
    const cityElements = received.getAllByTestId('city-element');
    const pass = cityElements.length === expectedLength;
    if (pass) {
      return {
        message: () => `Expected to render ${expectedLength} city elements, but found ${cityElements.length}`,
        pass: true,
      };
    } else {
      return {
        message: () => `Expected to render ${expectedLength} city elements, but found ${cityElements.length}`,
        pass: false,
      };
    }
  },
});

jest.mock('../../hooks/useFetch', () => {
  let callCount = 0;
  return {
    __esModule: true,
    default: jest.fn(() => {
      // This is used to simulate the loading state
      const loading = callCount === 0 ? true : false;
      const data = [1, 2, 3];
      callCount++;
      return {
        data,
        loading,
        error: null
      };
    })
  };
});


describe('Featured component', () => {
  it('renders loading elements when loading is true', async () => {
    const cityList = [
      { id: 1, name: 'City 1', img: 'city1.jpg', properties: '10' },
      { id: 2, name: 'City 2', img: 'city2.jpg', properties: '11' },
      { id: 3, name: 'City 3', img: 'city3.jpg', properties: '12' },
      { id: 4, name: 'City 4', img: 'city4.jpg', properties: '13' }
    ];
    render(<Featured cityList={cityList} />);
  
    // Wait for the component to finish loading
    await screen.queryAllByTestId('loading-element');
  
    expect(screen).toHaveLoadingElements();
  });

  it('renders city elements when loading is false', () => {
    const cityList = [
      { id: 1, name: 'City 1', img: 'city1.jpg', properties: '10' },
      { id: 2, name: 'City 2', img: 'city2.jpg', properties: '11' },
      { id: 3, name: 'City 3', img: 'city3.jpg', properties: '12' },
      { id: 4, name: 'City 4', img: 'city4.jpg', properties: '13' }
    ];
    render(<Featured cityList={cityList} />);

    expect(screen).toRenderCityElementsWithLength(cityList.length);
  });

  it('renders images for city elements', () => {
    const cityList = [
      { id: 1, name: 'City 1', img: 'city1.jpg', properties: '10' },
      { id: 2, name: 'City 2', img: 'city2.jpg', properties: '11' },
      { id: 3, name: 'City 3', img: 'city3.jpg', properties: '12' },
      { id: 4, name: 'City 4', img: 'city4.jpg', properties: '13' }
    ];
    render(<Featured cityList={cityList} />);
  
    const images = screen.getAllByAltText('city-image');
    expect(images.length).toBe(cityList.length);
  });

  it('renders city names correctly', () => {
    const cityList = [
      { id: 1, name: 'City 1', img: 'city1.jpg', properties: '10' },
      { id: 2, name: 'City 2', img: 'city2.jpg', properties: '11' },
      { id: 3, name: 'City 3', img: 'city3.jpg', properties: '12' },
      { id: 4, name: 'City 4', img: 'city4.jpg', properties: '13' }
    ];
    render(<Featured cityList={cityList} />);
  
    const cityNames = screen.getAllByText(/City \d/);
    expect(cityNames.length).toBe(cityList.length);
  });

  it('renders property counts correctly', () => {
    const cityList = [
      { id: 1, name: 'City 1', img: 'city1.jpg', properties: '10' },
      { id: 2, name: 'City 2', img: 'city2.jpg', properties: '11' },
      { id: 3, name: 'City 3', img: 'city3.jpg', properties: '12' },
      { id: 4, name: 'City 4', img: 'city4.jpg', properties: '13' }
    ];
    render(<Featured cityList={cityList} />);
  
    const propertyCounts = screen.getAllByText(/properties/);
    expect(propertyCounts.length).toBe(cityList.length);
  });
});
