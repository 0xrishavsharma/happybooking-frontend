import React from 'react';
import { render, screen } from '@testing-library/react';
import Featured from './FeaturedLocations';

jest.mock('../../hooks/useFetch', () => {
  let callCount = 0;
  return {
    __esModule: true,
    default: jest.fn(() => {
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
  it('renders loading elements when loadng is true', () => {
    const cityList = [
      { id: 1, name: 'City 1', img: 'city1.jpg', properties: '10' },
      { id: 2, name: 'City 2', img: 'city2.jpg', properties: '11' },
      { id: 3, name: 'City 3', img: 'city3.jpg', properties: '12' },
      { id: 4, name: 'City 4', img: 'city4.jpg', properties: '13' }
    ];
    render(<Featured cityList={cityList} />)

    const loadingElements = screen.queryAllByTestId('loading-element');
    expect(loadingElements.length).toBeGreaterThan(0);
  });

  it('renders city elements when loading is false', () => {
    const cityList = [
      { id: 1, name: 'City 1', img: 'city1.jpg', properties: '10' },
      { id: 2, name: 'City 2', img: 'city2.jpg', properties: '11' },
      { id: 3, name: 'City 3', img: 'city3.jpg', properties: '12' },
      { id: 4, name: 'City 4', img: 'city4.jpg', properties: '13' }
    ];
    render(<Featured cityList={cityList} />);

    const cityElements = screen.getAllByTestId('city-element');

    expect(cityElements.length).toBe(cityList.length);
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
