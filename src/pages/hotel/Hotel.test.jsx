import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Hotel from './Hotel';

describe('Hotel component', () => {
  it('renders the hotel component', () => {
    render(
      <MemoryRouter>
        <Hotel />
      </MemoryRouter>
    );
    
    // Check if the hotel items are rendered
    const hotelListItems = screen.queryAllByTestId('hotel');
    expect(hotelListItems.length).toBeGreaterThan(0);
  });

  it('displays the hotel name', () => {
    render(
      <MemoryRouter>
        <Hotel />
      </MemoryRouter>
    );
  
    const hotelName = screen.getByText('Grand Hotel');
    expect(hotelName).toBeInTheDocument();
  });

  it('displays the hotel location', () => {
    render(
      <MemoryRouter>
        <Hotel />
      </MemoryRouter>
    );
  
    const hotelLocation = screen.getByText('Grand Hotel, Subhash Street, Shimla, Himachal Pradesh');
    expect(hotelLocation).toBeInTheDocument();
  });

  it('displays the "Reserve or Book Now!" button', () => {
    render(
      <MemoryRouter>
        <Hotel />
      </MemoryRouter>
    );
  
    const reserveButton = screen.getByRole('button', { name: 'Reserve or Book Now!' });
    expect(reserveButton).toBeInTheDocument();
  });

  it('opens the image slider when an image is clicked', () => {
    render(
      <MemoryRouter>
        <Hotel />
      </MemoryRouter>
    );
  
    const hotelImages = screen.getAllByTestId('hotel-image');
    const imageToClick = hotelImages[0];
  
    fireEvent.click(imageToClick);
  
    // Check if the image slider is open
    const imageSlider = screen.getByTestId('image-slider');
    expect(imageSlider).toBeInTheDocument();
  });

  it('closes the image slider when the "X" button is clicked', () => {
    render(
      <MemoryRouter>
        <Hotel />
      </MemoryRouter>
    );

    // Open the image slider
    const hotelImages = screen.getAllByTestId('hotel-image');
    const imageToClick = hotelImages[0];
  
    fireEvent.click(imageToClick);
    
    // Close the image slider
    const closeButton = screen.getByTestId('close-button');
    fireEvent.click(closeButton);

    // Check if the image slider is closed
    const imageSlider = screen.queryByTestId('image-slider');
    expect(imageSlider).not.toBeInTheDocument();
  });

  it('renders the hotel images', () => {
    render(
      <MemoryRouter>
        <Hotel />
      </MemoryRouter>
    );
    
    // Check if the hotel items are rendered
    const hotelListItems = screen.queryAllByTestId('hotel-image');
    expect(hotelListItems.length).toBeGreaterThan(0);
  });

  it('changes the image when the right arrow is clicked', () => {
    render(
      <MemoryRouter>
        <Hotel />
      </MemoryRouter>
    );
  
    const hotelImages = screen.getAllByTestId('hotel-image');
    fireEvent.click(hotelImages[0]); // Open image slider
  
    const rightArrow = screen.getByTestId('right-arrow');
  
    const initialImage = screen.getByTestId('current-image');
    const initialImageSrc = initialImage.src;
  
    fireEvent.click(rightArrow); // Simulate click on right arrow button
  
    const newImage = screen.getByTestId('current-image');

    expect(initialImageSrc).not.toMatch(newImage.src);
  });

  it('changes the image when the left arrow is clicked', () => {
    render(
      <MemoryRouter>
        <Hotel />
      </MemoryRouter>
    );
  
    const hotelImages = screen.getAllByTestId('hotel-image');
    fireEvent.click(hotelImages[0]); // Open image slider
  
    const leftArrow = screen.getByTestId('left-arrow');
  
    const initialImage = screen.getByTestId('current-image');
    const initialImageSrc = initialImage.src;
  
    fireEvent.click(leftArrow); // Simulate click on left arrow button
  
    const newImage = screen.getByTestId('current-image');

    expect(initialImageSrc).not.toMatch(newImage.src);
  });
});