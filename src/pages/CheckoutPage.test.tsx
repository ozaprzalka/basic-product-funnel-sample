import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MemoryRouter } from 'react-router-dom';

import CheckoutPage from './CheckoutPage';

describe('CheckoutPage', () => {
  it('renders checkout form fields', () => {
    render(
      <MemoryRouter>
        <CheckoutPage />
      </MemoryRouter>,
    );

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/shipping address/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /place order/i }),
    ).toBeInTheDocument();
  });

  it('shows success message after submit', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <CheckoutPage />
      </MemoryRouter>,
    );

    await user.type(screen.getByLabelText(/full name/i), 'Erko Bridee');
    await user.type(screen.getByLabelText(/email/i), 'erko@example.com');
    await user.type(
      screen.getByLabelText(/shipping address/i),
      'My Shipping Address',
    );
    await user.click(screen.getByRole('button', { name: /place order/i }));

    await waitFor(() => {
      expect(screen.getByRole('status')).toHaveTextContent(
        /order placed successfully/i,
      );
    });
  });
});
