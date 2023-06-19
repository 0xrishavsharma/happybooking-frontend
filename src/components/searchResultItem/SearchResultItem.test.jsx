import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import SearchResultItem from './SearchResultItem';

import Hotel from '../../pages/hotel/Hotel';

const item = {
  id: 1,
  name: 'Property 1',
  img: 'property1.jpg',
  distance: '10km',
  rating: '4.5',
  cheapestPrice: '€ 100'
};

describe('SearchResultItem component', () => {
  it('renders the SearchResultItem component', () => {
    render(
      <MemoryRouter>
        <SearchResultItem item={item} />
      </MemoryRouter>
    );
    
    // Check if the SearchResultItem items are rendered
    const SearchResultItemItems = screen.queryAllByTestId('SearchResultItem');
    expect(SearchResultItemItems.length).toBeGreaterThan(0);
  });

  it('renders the property images', () => {
    render(
      <MemoryRouter>
        <SearchResultItem item={item} />
      </MemoryRouter>
    );
    
    // Check if the SearchResultItem images are rendered
    const SearchResultItemImages = screen.queryAllByTestId('image');
    expect(SearchResultItemImages.length).toBeGreaterThan(0);
  });

  it('renders the property name', () => {
    render(
      <MemoryRouter>
        <SearchResultItem item={item} />
      </MemoryRouter>
    );
    
    // Check if the SearchResultItem name is rendered
    const SearchResultItemName = screen.queryAllByTestId('name');
    expect(SearchResultItemName.length).toBeGreaterThan(0);
  });

  it('renders the property distance', () => {
    render(
      <MemoryRouter>
        <SearchResultItem item={item} />
      </MemoryRouter>
    );
    
    // Check if the SearchResultItem distance is rendered
    const SearchResultItemDistance = screen.queryAllByTestId('distance');
    expect(SearchResultItemDistance.length).toBeGreaterThan(0);
  });

  it('renders the property rating', () => {
    render(
      <MemoryRouter>
        <SearchResultItem item={item} />
      </MemoryRouter>
    );
    
    // Check if the SearchResultItem rating is rendered
    const SearchResultItemRating = screen.queryAllByTestId('rating');
    expect(SearchResultItemRating.length).toBeGreaterThan(0);
  });

  it('renders the property cheapestPrice', () => {
    render(
      <MemoryRouter>
        <SearchResultItem item={item} />
      </MemoryRouter>
    );
    
    // Check if the SearchResultItem cheapestPrice is rendered
    const SearchResultItemCheapestPrice = screen.queryAllByTestId('cheapestPrice');
    expect(SearchResultItemCheapestPrice.length).toBeGreaterThan(0);
  });

  it('renders the property button', () => {
    render(
      <MemoryRouter>
        <SearchResultItem item={item} />
        <Hotel />
      </MemoryRouter>
    );
    
    // Check if the SearchResultItem button is rendered
    const SearchResultItemButton = screen.queryAllByTestId('link-to-hotels');
    fireEvent.click(SearchResultItemButton[0]);
    expect(screen.getByTestId('hotel')).toBeInTheDocument();
  })
});