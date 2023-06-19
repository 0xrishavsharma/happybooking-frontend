import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import PropertiesList from './PropertiesList';

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

const propertiesList = [
  { id: 1, name: 'Property 1', img: 'property1.jpg', properties: '10' },
  { id: 2, name: 'Property 2', img: 'property2.jpg', properties: '11' },
  { id: 3, name: 'Property 3', img: 'property3.jpg', properties: '12' },
  { id: 4, name: 'Property 4', img: 'property4.jpg', properties: '13' },
  { id: 5, name: 'Property 5', img: 'property5.jpg', properties: '14' }
];

describe('PropertiesList component', () => {
  it('renders loading elements when loadng is true', () => {
    render(<PropertiesList propertiesList={propertiesList} />)

    const loadingElements = screen.queryAllByTestId('loading-element');
    expect(loadingElements.length).toBeGreaterThan(0);
  });

  it('renders the propertiesList text', () => {
    render(
      <MemoryRouter>
        <PropertiesList />
      </MemoryRouter>
    );
    
    // Check if the propertiesList items are rendered
    const propertiesListListItems = screen.queryAllByTestId('propertiesList');
    expect(propertiesListListItems.length).toBeGreaterThan(0);
  });

  it('renders the property images', () => {
    render(
      <MemoryRouter>
        <PropertiesList propertiesList={propertiesList}/>
      </MemoryRouter>
    );
    
    // Check if the propertiesList items are rendered
    const propertiesImages = screen.queryAllByTestId('property-image');
    expect(propertiesImages.length).toEqual(propertiesList.length);
  });

  it('renders the property names', () => {
    render(
      <MemoryRouter>
        <PropertiesList propertiesList={propertiesList}/>
      </MemoryRouter>
    );
    
    // Check if the propertiesList items are rendered
    const propertiesNames = screen.queryAllByTestId('property-name');
    expect(propertiesNames.length).toEqual(propertiesList.length);
  });
});