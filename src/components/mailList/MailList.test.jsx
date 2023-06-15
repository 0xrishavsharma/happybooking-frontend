import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import MailList from './MailList';

describe('MailList component', () => {
  it('renders the mail list text', () => {
    render(
      <MemoryRouter>
        <MailList />
      </MemoryRouter>
    );
    
    // Check if the mail list items are rendered
    const mailListItems = screen.getAllByRole('heading', { hidden: true });
    expect(mailListItems).toHaveLength(1);

    // Check if the email input is rendered
    const emailInput = screen.getByPlaceholderText('Your email');
    expect(emailInput).toBeInTheDocument();

    // Check if the subscribe button is rendered
    const subscribeButton = screen.getByRole('button', { name: 'Subscribe' });
    expect(subscribeButton).toBeInTheDocument();
  })

  it('checks the checkbox', () => {
    render(
      <MemoryRouter>
        <MailList />
      </MemoryRouter>
    );

    // Check if the checkbox is rendered
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();

    // Check if the checkbox is initially checked
    expect(checkbox).toBeChecked();

    // Simulate clicking on the checkbox
    fireEvent.click(checkbox);

    // Check if the checkbox is now unchecked
    expect(checkbox).not.toBeChecked();
  });
});